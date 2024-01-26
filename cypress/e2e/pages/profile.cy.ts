/// <reference types="cypress" />
describe('Should visit the profile page and check the title', () => {
  it('Should visit the profile page and check the title', () => {
    cy.visit('/login');
    cy.get('[name=email]').type('fedebataglia@mail.com');
    cy.get('[name=password]').type('fedebata');
    cy.intercept('POST', '/auth/login', { statusCode: 201 }).as('loginUser');
    cy.intercept('GET', '/user/profile', {
      statusCode: 200,
      body: {
        name: 'pedro',
        direction: 'calle falsa 123',
        email: 'qwerty@mail.com',
        telephone: +111111111,
      },
    }).as('userData');
    cy.get('[data-cy="login-form"]').submit();
    cy.wait('@loginUser').then((interception) => {
      expect(interception?.response?.statusCode).to.equal(201);
    });
    cy.url().should('include', '/');
    cy.wait('@userData');
    cy.get('[id="label-menu"]').click();
    cy.get('[data-cy="my-profile"]').click();
    cy.get('.wrapper').should('exist');
    cy.get('h1').should('contain', 'Mi Perfil');
    cy.get('[data-cy=user-name]').should('exist');
    cy.contains('Nombre').should('exist');
    cy.get('[data-cy=user-direction]').should('exist');
    cy.contains('Dirección').should('exist');
    cy.get('[data-cy=user-email]').should('exist');
    cy.contains('Mail').should('exist');
    cy.get('[data-cy=user-telephone]').should('exist');
    cy.contains('Teléfono').should('exist');
    cy.get('[data-cy="button-back"]').click();
  });
  it('should visit the unauthenticated profile page and check the title', () => {
    cy.visit('/');
    cy.get('[id="label-menu"]').click();
    cy.get('[data-cy="my-profile"]').click();
    cy.get('h1').should('contain', 'Mi Perfil');
    cy.contains('Debes tener una sesión iniciada para acceder a tu perfil.');
    cy.get('[data-cy="button-back"]').click();
  });
});
