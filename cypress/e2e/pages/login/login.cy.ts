/// <reference types="cypress" />
describe('Login page', () => {
  it('Should log in correctly', () => {
    cy.visit('/login');
    cy.get('[name=email]').type('fedebataglia@mail.com');
    cy.get('[name=password]').type('fedebata');

    cy.intercept('POST', '/auth/login', { statusCode: 201 }).as('loginUser');
    cy.get('[data-cy="login-form"]').submit();
    cy.wait('@loginUser').then((interception) => {
      expect(interception?.response?.statusCode).to.equal(201);
    });
    cy.url().should('include', '/');
  });
});
