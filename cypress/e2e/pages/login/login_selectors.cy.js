//exporting this to to get the feature files working.
export class LoginPage {

    navigateToHome() {
        cy.visit('/')
    }
    LogoHeader(expectedLogoText) {
        cy.get('.login_logo').should('have.text', expectedLogoText);
    }
    UsernameField(expectedLoginText) {
        cy.get('#user-name').should('have.attr', 'placeholder', expectedLoginText);
    }
    PasswordField(expectedPasswordText) {
        cy.get('#password').should('have.attr', 'placeholder', expectedPasswordText);
    }
    LoginButton(expectedText) {
        cy.get('#login-button').should('have.value', expectedText);
    }
}

//This is for the old POM tests to still pass.
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
    LoginRedirect: () => {
        return cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    },
};

export default { LoginSelectors };