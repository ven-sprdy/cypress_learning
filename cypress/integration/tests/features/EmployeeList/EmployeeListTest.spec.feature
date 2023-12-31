Feature: Employee List
Employee List, functional validations

    Background: User navigated to login page
        Given User is on HRM login page
        Then User should see the Home page with "OrangeHRM" title

    Scenario: Validate employers list search functionality
        When User enters username and password
            | username | password |
            | admin    | admin123 |
        When User clicks the login button
        Then Validate welcome page with "OrangeHRM" title
        When User clicks on employee list link from left hand menu
        Then User should see the employee list page with "OrangeHRM" title