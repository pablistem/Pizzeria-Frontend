/// <reference types="cypress" />
describe('Render test', () => {
  it('Should visit the home page and check the title', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Pizzería Don Remolo');
    cy.get('p').should('have.text', 'hola');
  });
});
