import {When, Then} from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../../pages/Login/LoginPage.spec';
import forgotPasswordPage from '../../../pages/ForgotPassword/ForgotPasswordPage.spec';

When('User clicks on forgot password link', () => {
    loginPage.clickForgotPasswordLink();
});

Then('User should see the forgot password page with {string} title', (homeTitle) => {
    cy.validatePageTitle(homeTitle);
});

Then('Validate forgot password {string} header title', (forgotPasswordHeading) => {
    forgotPasswordPage.checkForgotPasswordHeading(forgotPasswordHeading);
});
