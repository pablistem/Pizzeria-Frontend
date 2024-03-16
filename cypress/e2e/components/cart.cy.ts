/// <reference types="cypress" />
describe('Agregar producto al carrito', () => {
  it('Agrega un producto al carrito y verifica la cantidad', () => {
    // Navega a la página del producto
    cy.visit('/');
    cy.intercept('GET', '/product', {
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
    // Agrega el producto al carrito
    cy.get('#add-product').click();

    // Verifica la cantidad en el carrito
    cy.get('#cart-quantity').should('have.text', '1');
    cy.get('#cart-open').click();
    cy.get('#add-item').click();
    cy.get('#product-quantity').should('have.text', '2');
  });
});
