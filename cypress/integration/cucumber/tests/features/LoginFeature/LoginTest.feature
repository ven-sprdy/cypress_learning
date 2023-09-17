Feature: Login page validation of the application

    As a user, login with valid and invalid credentials

    Background: User on login page
        Given User is on HRM login page
        Then  User should see the Home page with title

    Scenario: As a user, after providing valid credentials. User land's on HRM welcome page.
        When User enter username and password
        | username | password |
        | admin    | admin123 |
        And User clicks the login button
        Then User should see the welcome page with title   

    Scenario: As a user, after providing invalid credentials. User should see error.
        When User enter username and password
        | username | password  |
        | admin    | admin1234 |
        And User clicks the login button
        Then User should see the error on login page