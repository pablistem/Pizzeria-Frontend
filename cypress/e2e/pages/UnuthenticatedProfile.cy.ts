/// <reference types="cypress" />

describe('Unauthenticated Profile Page', () => {
  it('should display the unauthenticated profile page', () => {
    cy.visit('/unauthenticated-profile');
    cy.get('h1').should('contain', 'Mi Perfil');
    cy.contains('Debes tener una sesión iniciada para acceder a tu perfil.');
  });

  it('should have a login button', () => {
    cy.visit('/unauthenticated-profile');
    cy.get('button').should('contain', 'Iniciar sesión');
  });
});
