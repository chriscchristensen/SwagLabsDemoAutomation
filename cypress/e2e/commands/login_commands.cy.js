import { Login } from '../pages/login/login.cy';

const login = new Login();

Cypress.Commands.add('verifyPageComponents', () => {
    login.verifyComponents();
});
Cypress.Commands.add('clickLogin', () => {
    login.clickLoginBtn();
    login.verifyErrorComponents();
})