import { Login } from '../pages/login/login.cy';

const login = new Login();

Cypress.Commands.add('loginOk', () => {
    //Validate happy path to login
    login.clickTextFieldUsrn().type('standard_user');
    login.clickTextFieldPswrd().type('secret_sauce');
})