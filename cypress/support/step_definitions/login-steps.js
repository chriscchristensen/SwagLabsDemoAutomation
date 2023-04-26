import { LoginSelectors } from "../../e2e/pages/login/login_selectors.cy.js";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const loginPage = new LoginSelectors()

When('I open the login page', () => {
  loginPage.navigateToHome();
})
