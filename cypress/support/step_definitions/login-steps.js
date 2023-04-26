import { LoginPage } from "../../e2e/pages/login/login_selectors.cy.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const loginPage = new LoginPage()

Given('I open the login page', () => {
  loginPage.navigateToHome();
})
Then('logo for the page is displayed with text {string}', (placeholdertext) => {
  loginPage.LogoHeader(placeholdertext);
})

And('the login button is displays {string}', (placeholdertext) => {
  loginPage.LoginButton(placeholdertext);
})

And('{string} text is displayed in Username field', (placeholdertext) => {
  loginPage.UsernameField(placeholdertext)
})

And('{string} text is displayed in Password field', (placeholdertext) => {
  loginPage.PasswordField(placeholdertext)
})

