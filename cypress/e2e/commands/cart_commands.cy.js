import { Cart } from '../pages/cart/cart.cy';

const cart = new Cart();

Cypress.Commands.add('verifyCartPageComponents', () => {
    cart.verifyCartPageComponents();
});
Cypress.Commands.add('clickCartButton', () => {
    cart.clickCartButton();
})