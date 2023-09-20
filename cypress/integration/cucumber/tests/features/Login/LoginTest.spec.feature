Feature: User want to login into HRM site with valid and invalid credentials
    Feature Description: Validate user login with valid and invalid credentials

    Background: User navigated to login page
        Given User is on HRM login page
        Then User should see the Home page with "OrangeHRM" title

    Scenario: Provide valid credentials, user land's on HRM welcome page
        When User enters username and password
            | username | password |
            | admin    | admin123 |
        When User clicks the login button
        Then Validate welcome page with "OrangeHRM" title

    Scenario: Provide invalid credentials, user should see login error
        When User enters username and password
            | username | password  |
            | admin    | admin1234 |
        When User clicks the login button
        Then User should see "Invalid credentials" error on login page