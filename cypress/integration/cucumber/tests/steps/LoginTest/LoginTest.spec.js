import {When, Then} from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../../pages/LoginPage/LoginPage.spec';

When('User enter username and password', (table) => {
    table.hashes().forEach( (row) => {
        loginPage.enterUserNamePassword(row.username, row.password);
    });
});

When('User clicks the login button', () => {
    loginPage.clickLoginButton();
});

Then('User should see the welcome page with {string} title', (homeTitle) => {
    loginPage.validateTitle(homeTitle);
});

Then('User should see the {string} error on login page', (errorMessage) => {
    loginPage.validateInvalidLoginError(errorMessage);
});