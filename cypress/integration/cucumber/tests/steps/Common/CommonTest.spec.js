import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '../../../pages/Login/LoginPage.spec';

// beforeEach(() => {
//     cy.task('beforeTest', Cypress.currentTest.title);
// });

// afterEach(() => {
//     cy.task('afterTest', Cypress.currentTest.title)
// });

Given('User is on HRM login page', () => {
    cy.visit('/');
});

Then('User should see the Home page with {string} title', (loginPageTitle) => {
    cy.assertPageTitle(loginPageTitle);
});

When('User enters username and password', (table) => {
    table.hashes().forEach((row) => {
        loginPage.typeUsername(row.username);
        loginPage.typePassword(row.password);
        // cy.login(row.username, row.password);
    });
});

When('User clicks the login button', () => {
    loginPage.clickLoginButton();
});

Then('Validate welcome page with {string} title', (homePageTitle) => {
    cy.assertPageTitle(homePageTitle);
});