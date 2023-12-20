/// <reference types="cypress" />
describe('Navbar test', () => {
  it('Should show the navbar', () => {
    cy.visit('/');
    cy.get('#label-menu').click();
    cy.contains('Mi perfil').should('exist');
    cy.contains('Mis pedidos').should('exist');
    cy.contains('Descuentos').should('exist');
    cy.contains('Cupones').should('exist');
  });
});
