/// <reference types="cypress" />
describe('Navbar test', () => {
  it('should display a image in element div with class image', () => {
    cy.get('div[class="image"]').find('img').should('be.visible');
  });
});
