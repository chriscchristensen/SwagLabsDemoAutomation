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
};

export default { LoginSelectors };