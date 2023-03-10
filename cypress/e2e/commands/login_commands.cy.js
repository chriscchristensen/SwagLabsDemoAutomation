import { Login } from '../pages/login/login.cy';

const login = new Login();

Cypress.Commands.add('verifyPageComponents', () => {
    login.verifyComponents();
});
Cypress.Commands.add('verifyPageErrorComponents', () => {
    login.verifyErrorComponents();
});
Cypress.Commands.add('clickLogin', () => {
    login.clickLoginBtn();
});
Cypress.Commands.add('typeCorrectUsername', () => {
    login.clickTextFieldUsrn();
    login.typeTextFieldUsrn();
})
Cypress.Commands.add('typeCorrectPassword', () => {
    login.clickTextFieldPswrd();
    login.typeTextFieldPswrd();
})
Cypress.Commands.add('verifyPageUsernameErrorComponents', () => {
    login.verifyErrorUsernameComponents();
});
Cypress.Commands.add('verifyPagePasswordErrorComponents', () => {
    login.verifyErrorPasswordComponents();
});
Cypress.Commands.add('verifyRedirectOnLoginURL', () => {
    login.verifyRedirectOnLoginURL();
})
