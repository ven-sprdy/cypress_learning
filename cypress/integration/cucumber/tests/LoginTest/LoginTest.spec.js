import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/LoginPage/LoginPage.spec'

Given('User is on HRM login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
});

Then('User should see the Home page with title', () => {
    loginPage.validateTitle();
});

When('User enter username and password', (table) => {
    table.hashes().forEach( (row) => {
        loginPage.enterUserNamePassword(row.username, row.password);
    });
});

When('User clicks the login button', () => {
    loginPage.clickLoginButton();
});

Then('User should see the welcome page with title', () => {
    loginPage.validateTitle();
});

Then('User should see the error on login page', () => {
    loginPage.validateInvalidLoginError();
});