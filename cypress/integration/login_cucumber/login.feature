Feature: SauceDemo Login page

Background:
    Given I open the login page

Scenario: displays login page elements by default
  Then logo for the page is displayed with text "Swag Labs"
  And "Username" text is displayed in Username field
  And "Password" text is displayed in Password field
  And the login button is displays "Login"