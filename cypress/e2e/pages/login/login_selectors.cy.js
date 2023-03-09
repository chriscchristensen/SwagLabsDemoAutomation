const LoginSelectors = {
    LogoHeader: () => {
        return cy.get('.login_logo');
    },
    UsernameField: () => {
        return cy.get('#user-name');
    },
    PasswordField: () => {
        return cy.get('#password');
    },
    LoginButton: () => {
        return cy.get('#login-button');
    },
    LoginError: () => {
        return cy.get('[data-test="error"]');
    },
    LoginUsrnX: () => {
        return cy.get('form > :nth-child(1) > .svg-inline--fa');
    },
    LoginPswdX: () => {
        return cy.get(':nth-child(2) > .svg-inline--fa');
    },
};

export default { LoginSelectors };