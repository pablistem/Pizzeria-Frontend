/// <reference types="cypress" />

const passwordValidUser = Math.random().toString(36).substring(2, 10);

const validUser = {
  name: Math.random().toString(36).substring(2, 10),
  lastName: Math.random().toString(36).substring(2, 10),
  email: `${Math.random().toString(36).substring(2, 10)}@email.com`,
  password: passwordValidUser,
  password2: passwordValidUser,
};

const userAlreadyRegistered = {
  name: 'Joaquin',
  lastName: 'Ramirez',
  email: 'ramirezjoaquin@mail.com',
  password: 'joakorami8887',
  password2: 'joakorami8887',
};

describe('register page', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('Should register a new user', () => {
    cy.get('#name').type(validUser.name);
    cy.get('#lastName').type(validUser.lastName);
    cy.get('#email').type(validUser.email);
    cy.get('#password').type(validUser.password);
    cy.get('#password2').type(validUser.password2);

    cy.intercept('POST', '/auth/signup', { statusCode: 201 }).as('signupUser');
    cy.get('[data-cy = "form-register"]').submit();
    cy.wait('@signupUser').then((interception) => {
      expect(interception?.response?.statusCode).to.equal(201);
    });

    cy.contains('Usuario Registrado Exitosamente').should('exist');
    cy.url().should('include', '/login');
  });

  it('should to fail for user already registered', () => {
    cy.get('#name').type(userAlreadyRegistered.name);
    cy.get('#lastName').type(userAlreadyRegistered.lastName);
    cy.get('#email').type(userAlreadyRegistered.email);
    cy.get('#password').type(userAlreadyRegistered.password);
    cy.get('#password2').type(userAlreadyRegistered.password2);

    cy.intercept('POST', '/auth/signup', { statusCode: 409 }).as('signupUser');
    cy.get('[data-cy = "form-register"]').submit();
    cy.contains('Request failed with status code 409').should('exist');
    cy.wait('@signupUser').then((interception) => {
      expect(interception?.response?.statusCode).to.equal(409);
    });
  });

  it('should to show a validation error', () => {
    cy.get('#name').focus();
    cy.get('#lastName').focus();
    cy.get('#email').focus();
    cy.get('#password').focus();
    cy.get('#password2').focus();
    cy.get('#password2').blur();
    cy.contains('El nombre es obligatorio').should('exist');
    cy.contains('El apellido es obligatorio').should('exist');
  });
});
