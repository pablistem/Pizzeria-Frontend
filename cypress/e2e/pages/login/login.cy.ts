/// <reference types="cypress" />
describe('Login page', () => {
  it('Should visit the home page and check the title', () => {
    cy.visit('/');
    cy.get('[name=email]').type('email');
    cy.intercept('GET');
  });
});
