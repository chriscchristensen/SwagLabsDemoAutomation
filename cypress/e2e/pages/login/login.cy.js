import { LoginSelectors } from "./login_selectors.cy.js";

const LABELS = {
    SWAG_HEADER: 'Swag Labs',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    LOGIN: 'Login',
    ERROR: 'Epic sadface: Username is required',
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
    clickTextFieldPswrd() {
        this.select.PasswordField().click();
    }
    clickLoginBtn() {
        this.select.LoginButton().click();
    }
    verifyErrorComponents() {
        this.select.LoginError().should('exist').contains(LABELS.ERROR);
        this.select.LoginUsrnX().should('exist').should('have.class', 'svg-inline--fa fa-times-circle fa-w-16 error_icon');
        this.select.LoginPswdX().should('exist').should('have.class', 'svg-inline--fa fa-times-circle fa-w-16 error_icon');
    }
}
export default {
    Login,
    LABELS,
}