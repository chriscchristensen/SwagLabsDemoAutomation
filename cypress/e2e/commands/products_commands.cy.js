import { Products } from '../pages/products/products.cy';

const products = new Products();

Cypress.Commands.add('verifyProductPageComponents', () => {
    products.verifyProductPageComponents();
});
Cypress.Commands.add('addRemoveFromCart', () => {
    products.addRemoveFromCart();
})