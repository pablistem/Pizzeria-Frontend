/// <reference types="cypress" />
describe('Should visit the home page and check if the products exists', () => {
  it('Visit home page and check if the products exists', () => {
    cy.visit('/');
    cy.intercept('GET', '/user/profile', {
      statusCode: 200,
      body: {
        name: 'pedro',
        direction: 'calle falsa 123',
        email: 'qwerty@mail.com',
        telephone: +111111111,
      },
    }).as('userData');
    cy.intercept('GET', '/api/products', {
      statusCode: 200,
      body: [
        {
          name: 'Jamon',
          description: ' Salsa,muzzarella y jamon',
          price: '4000',
          image: '../../src/assets/Pizza types/pizza-jamon.jpg',
        },
        {
          name: 'Cuatro quesos',
          description:
            'Salsa, muzzarella, queso azul, queso parmesano y queso gorgonzola',
          price: '5000',
          image: '../../src/assets/Pizza types/pizza-cuatro-quesos.jpg',
        },
        {
          name: 'Jamon y salchichas',
          description: 'Salsa, muzzarella, jamon, salchichas',
          price: '4850',
          image: '../../src/assets/Pizza types/pizza-jamon-salchichas.jpg',
        },
        {
          name: 'Pepperoni',
          description: 'Salsa, muzzarella,pepperoni',
          price: '4562',
          image: '../../src/assets/Pizza types/pizza-cheese-pepperoni.jpg',
        },
      ],
    }).as('productsData');
  });
});
