import {Given, Then} from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../../pages/LoginPage/LoginPage.spec';

beforeEach(() => {
    cy.task('beforeTest', Cypress.currentTest.title);
});

afterEach(() => {
    cy.task('afterTest', Cypress.currentTest.title)
});

Given('User is on HRM login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
});

Then('User should see the Home page with {string} title', (loginTitle) => {
    loginPage.validateTitle(loginTitle);
});