Feature: SauceDemo Login page

Background:
    Given a user opens the login page

Scenario: displays login page elements by default
    Then logo for the page is displayed with text "Swag Labs"
    And "Username" text is displayed in Username field
    And "Password" text is displayed in Password field
    And the login button is displays "Login"

Scenario: User enteres in the correct username and password
    When a user types in the correct Username "standard_user"
    And a user types in the correct Password "secret_sauce"
    And a user clicks the "Login" button
    Then the user will be logged into the "Products" page

Scenario: User enteres in the incorrect username and correct password
    When a user types in the incorrect "Username" for the username
    And a user types in the correct Password "secret_sauce"
    And a user clicks the "Login" button
    Then the user will not see the "Products" page
    And a red X will appear next to the Username Field
    And a red X will appear next to the Password Field
    And a username error will appear with "Epic sadface: Username and password do not match any user in this service" text

Scenario: User enteres in the correct username and incorrect password
    When a user types in the correct Username "standard_user"
    And a user types in the incorrect "Password" for the password
    And a user clicks the "Login" button
    Then the user will not see the "Products" page
    And a red X will appear next to the Username Field
    And a red X will appear next to the Password Field
    And a password error will appear with "Epic sadface: Username and password do not match any user in this service" text

Scenario: User enteres in the incorrect username and incorrect password
    When a user types in the incorrect "Username" for the username
    And a user types in the incorrect "Password" for the password
    And a user clicks the "Login" button
    Then the user will not see the "Products" page
    And a red X will appear next to the Username Field
    And a red X will appear next to the Password Field
    And a username error will appear with "Epic sadface: Username and password do not match any user in this service" text

Scenario: User enteres in a blank username and blank password
    When a user leaves the username blank
    And a user leaves the Password field blank
    And a user clicks the "Login" button
    Then the user will not see the "Products" page
    And a red X will appear next to the Username Field
    And a red X will appear next to the Password Field
    And a username error will appear with "Epic sadface: Username is required" text

Scenario: User enteres in the correct username and blank password
    When a user types in the correct Username "standard_user"
    And a user leaves the Password field blank
    And a user clicks the "Login" button
    Then the user will not see the "Products" page
    And a red X will appear next to the Username Field
    And a red X will appear next to the Password Field
    And a password error will appear with "Epic sadface: Password is required" text

Scenario: User enteres in the blank username and correct password
    When a user leaves the username blank
    And a user types in the correct Password "secret_sauce"
    And a user clicks the "Login" button
    Then the user will not see the "Products" page
    And a red X will appear next to the Username Field
    And a red X will appear next to the Password Field
    And a username error will appear with "Epic sadface: Username is required" text
