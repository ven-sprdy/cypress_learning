class LoginPage {

    constructor() {
        this.url = "/";
    }

    enterUserNamePassword(username, password) {
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        return this;
    }

    clickLoginButton() {
        cy.get('button[type="submit"]').click();
        return this;
    }

    validateTitle(title) {
        cy.title().should('eq', title);
    }

    validateInvalidLoginError(errorMessage) {
        cy.get('.oxd-alert-content--error p').then((element) => {
            let actualError = element.text();
            assert.equal(actualError, errorMessage, "Error message displayed: " + actualError);
        });
    }

    clickForgotPasswordLink() {
        cy.get('p.orangehrm-login-forgot-header').click();
        return this;
    }

}

const loginPage = new LoginPage();
export default loginPage;