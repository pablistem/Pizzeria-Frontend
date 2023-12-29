/// <reference types="cypress" />
describe('Profile page', () => {
  it('Should visit the profile page and check the title', () => {
    cy.visit('/profile');
    cy.get('h1').should('contain', 'Mi Perfil');
  });
});
