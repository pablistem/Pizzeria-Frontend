/// <reference types="cypress" />
describe('Modal test', () => {
  it('Should show the modal', () => {
    cy.visit('/');
    cy.get('#open-modal-button').click();
    cy.get('#modal').should('be.visible');
    cy.contains('País').should('exist');
    cy.contains('Estado/Provicia').should('exist');
    cy.contains('Ciudad').should('exist');
    cy.contains('Domicilio').should('exist');
    cy.get('#close-modal-button').click();
    cy.get('#modal').should('not.be.visible');
  })
})