import { LoginSelectors } from "./login_selectors.cy.js";

const LABELS = {
    SWAG_HEADER: 'Swag Labs',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    LOGIN: 'Login',
};

class Login {
    constructor() {
        this.select = LoginSelectors;
    }

    verifyComponents() {
        //Verify Components
        this.select.LogoHeader().should('exist').should('contain.placeholder', LABELS.SWAG_HEADER);
        this.select.UsernameField().should('exist').should('contain.placeholder', LABELS.USERNAME);
        this.select.PasswordField().should('exist').should('contain.placeholder', LABELS.PASSWORD);
        this.select.LoginButton().should('exist').should('contain.placeholder', LABELS.LOGIN);
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
}
export default {
    Login,
    LABELS,
}