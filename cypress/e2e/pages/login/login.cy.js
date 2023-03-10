import { LoginSelectors } from "./login_selectors.cy.js";

const LABELS = {
    SWAG_HEADER: 'Swag Labs',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    LOGIN: 'Login',
    USERNAMEERROR: 'Epic sadface: Username is required',
    PASSWORDERROR: 'Epic sadface: Password is required',
    USERNAME: 'standard_user',
    PASSWORD: 'secret_sauce',
};

class Login {
    constructor() {
        this.select = LoginSelectors;
    }

    verifyComponents() {
        //Verify Components
        this.select.LogoHeader().should('exist').contains(LABELS.SWAG_HEADER);
        this.select.UsernameField().should('exist').should('have.attr', 'placeholder', 'Username');
        this.select.PasswordField().should('exist').should('have.attr', 'placeholder', 'Password');
        this.select.LoginButton().should('exist').contains(LABELS.LOGIN);
    }
    clickTextFieldUsrn() {
        this.select.UsernameField().click();
    }
    typeTextFieldUsrn() {
        this.select.UsernameField().type(LABELS.USERNAME);
    }
    clickTextFieldPswrd() {
        this.select.PasswordField().click();
    }
    typeTextFieldPswrd() {
        this.select.PasswordField().type(LABELS.PASSWORD);
    }
    clickLoginBtn() {
        this.select.LoginButton().click();
    }
    verifyErrorComponents() {
        this.select.LoginError().should('exist').contains(LABELS.USERNAMEERROR);
        this.select.LoginUsrnX().should('exist').should('have.class', 'svg-inline--fa fa-times-circle fa-w-16 error_icon');
        this.select.LoginPswdX().should('exist').should('have.class', 'svg-inline--fa fa-times-circle fa-w-16 error_icon');
    }
    verifyErrorUsernameComponents() {
        this.select.LoginError().should('exist').contains(LABELS.PASSWORDERROR);
        this.select.LoginUsrnX().should('exist').should('have.class', 'svg-inline--fa fa-times-circle fa-w-16 error_icon');
        this.select.LoginPswdX().should('exist').should('have.class', 'svg-inline--fa fa-times-circle fa-w-16 error_icon');
    }
    verifyErrorPasswordComponents() {
        this.select.LoginError().should('exist').contains(LABELS.USERNAMEERROR);
        this.select.LoginUsrnX().should('exist').should('have.class', 'svg-inline--fa fa-times-circle fa-w-16 error_icon');
        this.select.LoginPswdX().should('exist').should('have.class', 'svg-inline--fa fa-times-circle fa-w-16 error_icon');
    }
    verifyRedirectOnLoginURL() {
        this.select.LoginRedirect()
    }
}
export default {
    Login,
    LABELS,
}