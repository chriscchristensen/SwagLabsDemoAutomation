import { LoginPage } from "../../e2e/pages/login/login_selectors.cy.js";
import { ProductsPage } from "../../e2e/pages/products/products_selectors.cy.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const loginPage = new LoginPage()
const productPage = new ProductsPage()

Given('a user opens the login page', () => {
  loginPage.navigateToHome();
})

When('a user types in the correct Username {string}', (correctUsername) => {
  loginPage.UserNameFieldType(correctUsername);
})

When('a user types in the incorrect {string} for the username', (incorrectUsername) => {
  loginPage.UserNameFieldType(incorrectUsername);
})

When('a user leaves the username blank', () => {
})

Then('logo for the page is displayed with text {string}', (logoText) => {
  loginPage.LogoHeader(logoText);
})

Then('the user will be logged into the {string} page', (productHeaderText) => {
  productPage.ProductsPageHeaderText(productHeaderText);
})

Then('the user will not see the {string} page', (productHeaderText) => {
  productPage.ProductsPageHeaderTextNonExist(productHeaderText);
})

And('the login button is displays {string}', (loginButtonText) => {
  loginPage.LoginButton(loginButtonText);
})

And('{string} text is displayed in Username field', (userNameFieldPlaceHolder) => {
  loginPage.UsernameField(userNameFieldPlaceHolder);
})

And('{string} text is displayed in Password field', (passwordFieldPlaceHolder) => {
  loginPage.PasswordField(passwordFieldPlaceHolder);
})

And('a user types in the correct Password {string}', (passwordText) => {
  loginPage.PasswordFieldType(passwordText);
})

And('a user types in the incorrect {string} for the password', (incorrectPassworText) => {
  loginPage.PasswordFieldType(incorrectPassworText);
})

And('a user leaves the Password field blank', () => {
})

And('a user clicks the {string} button', (buttonToClick) => {
  loginPage.ClickLoginButton(buttonToClick);
})

And('a red X will appear next to the Username Field', (userNameX) => {
  loginPage.UserNameX(userNameX)
})

And('a red X will appear next to the Password Field', (passordX) => {
  loginPage.UserNameX(passordX)
})

And('a username error will appear with {string} text', (userNameErrorText) => {
  loginPage.UserNameError(userNameErrorText)
})

And('a password error will appear with {string} text', (passwordErrorText) => {
  loginPage.PasswordError(passwordErrorText)
})
