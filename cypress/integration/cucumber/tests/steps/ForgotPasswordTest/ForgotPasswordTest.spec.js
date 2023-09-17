import {When, Then} from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../../pages/LoginPage/LoginPage.spec';
import forgotPasswordPage from '../../../pages/ForgotPasswordPage/ForgotPasswordPage.spec';

When('User clicks on forgot password link', () => {
    loginPage.clickForgotPasswordLink();
});

Then('User should see the forgot password page with {string} title', (homeTitle) => {
    loginPage.validateTitle(homeTitle);
});

Then('Validate forgot password {string} header title', (forgotPasswordHeading) => {
    forgotPasswordPage.checkForgotPasswordHeading(forgotPasswordHeading);
});
