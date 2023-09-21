import {Then} from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '../../../pages/Login/LoginPage.spec';

Then('User should see {string} error on login page', (errorMessage) => {
    loginPage.validateInvalidLoginError(errorMessage);
});