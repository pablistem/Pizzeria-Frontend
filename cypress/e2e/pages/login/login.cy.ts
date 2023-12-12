/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should log in correctly', () => {
    cy.get('[name=email]').type('fedebataglia@mail.com');
    cy.get('[name=password]').type('fedebata');

    cy.intercept('POST', '/auth/login', { statusCode: 201 }).as('loginUser');
    cy.get('[data-cy="login-form"]').submit();
    cy.wait('@loginUser').then((interception) => {
      expect(interception?.response?.statusCode).to.equal(201);
    });
    cy.url().should('include', '/');
  });

  it('should fail when to login', () => {
    cy.get('[name=email]').type('axel@bla.com');
    cy.get('[name=password]').type('axl45872');

    cy.intercept('POST', '/auth/login', { statusCode: 401 }).as('loginUser');
    cy.get('[data-cy="login-form"]').submit();
    cy.wait('@loginUser').then((interception) => {
      expect(interception?.response?.statusCode).to.equal(401);
    });
    cy.contains('email y/o contraseña incorrectos').should('exist');
  });
  it('should show validate errors', () => {
    cy.get('#email').focus();
    cy.get('#password').focus();
    cy.get('#password').blur();

    cy.contains('Tenés que ingresar el email').should('exist');
    cy.contains('Tenés que ingresar la contraseña').should('exist');
  });
});
