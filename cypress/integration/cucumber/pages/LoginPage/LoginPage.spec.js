class LoginPage {

    constructor() {
        this.url = "/";
        this.title = "OrangeHRM";
        this.invalidLoginError = 'Invalid credentials';
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

    validateTitle() {
        cy.title().should('eq', this.title);
    }

    validateInvalidLoginError() {
        cy.get('.oxd-alert-content--error p').then((element) => {
            let actualError = element.text();
            assert.equal(actualError, this.invalidLoginError, "Error message displayed: " + actualError);
        });
    }

}

const loginPage = new LoginPage();
export default loginPage;