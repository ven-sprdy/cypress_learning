class LoginPage {

    constructor() {
        this.url = "/";
    } 

    clickLoginButton() {
        cy.get('button[type="submit"]').click();
    }

    validateInvalidLoginError(errorMessage) {
        cy.get('.oxd-alert-content--error p').then((element) => {
            let actualError = element.text();
            assert.equal(actualError, errorMessage, "Error message displayed: " + actualError);
        });
    }

    clickForgotPasswordLink() {
        cy.get('p.orangehrm-login-forgot-header').click();
    }

}

const loginPage = new LoginPage();
export default loginPage;