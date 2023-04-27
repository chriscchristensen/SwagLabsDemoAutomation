//exporting this to to get the login page feature files working.
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
    UserNameFieldType(typedText) {
        cy.get('#user-name').type(typedText);
    }
    PasswordFieldType(typedText) {
        cy.get('#password').type(typedText);
    }
    ClickLoginButton(clickedButton) {
        cy.get('#login-button').should('have.attr', 'value', clickedButton).click();
    }
    UserNameX() {
        cy.get('form > :nth-child(1) > .svg-inline--fa').should('exist')
    }
    PasswordX() {
        cy.get('form > :nth-child(1) > .svg-inline--fa').should('exist')
    }
    UserNameError(expectedText) {
        cy.get('[data-test="error"]').should('have.text', expectedText)
    }
    PasswordError(expectedText) {
        cy.get('[data-test="error"]').should('have.text', expectedText)
    }
    BankUserNameError(expectedText) {
        cy.get('[data-test="error"]').should('have.text', expectedText)
    }
    BlankPasswordError(expectedText) {
        cy.get('[data-test="error"]').should('have.text', expectedText)
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