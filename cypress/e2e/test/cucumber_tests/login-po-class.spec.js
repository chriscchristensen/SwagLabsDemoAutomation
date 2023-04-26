/// <reference types="cypress" />

import { LoginPage } from "../../pages/login/login_selectors.cy";

describe('login page tests', () => {
    const loginPage = new LoginPage()

beforeEach(() => {
    loginPage.navigateToHome();
})

    it('displays login page elements by default', () => {
        loginPage.LoginButton();
        loginPage.LogoHeader();
        loginPage.PasswordField();
        loginPage.UsernameField('Username');
    })
})