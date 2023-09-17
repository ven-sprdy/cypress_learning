Feature: Forgot Password funcionality validation of the application

    As a user, reset password by forgot password link

    Background: User on login page
        Given User is on HRM login page
        Then  User should see the Home page with "OrangeHRM" title

    Scenario: As a user, reset your password
        When User clicks on forgot password link
        Then User should see the forgot password page with "OrangeHRM" title 
        Then Validate forgot password "Reset Password" header title