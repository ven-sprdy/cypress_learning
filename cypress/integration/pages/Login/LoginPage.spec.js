class LoginPage {

    elements = {
        usernameInput: () => cy.get('input[name="username"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        signInButton: () => cy.get('button[type="submit"]'),
        forgotPasswordLink: () => cy.get('p.orangehrm-login-forgot-header'),
        loginErrorText: () => cy.get('.oxd-alert-content--error p')
    }

    constructor() {
        this.url = "/";
    } 

    typeUsername(username) {
        this.elements.usernameInput().clear().type(username);
      }
    
      typePassword(password) {
        this.elements.passwordInput().clear().type(password);
      }
    
      submitLogin(username,password){
        this.elements.usernameInput().clear().type(username);
        this.elements.passwordInput().clear().type(password);
        this.elements.signInButton().click();
      }

    clickLoginButton() {
        this.elements.signInButton().click();
    }

    validateInvalidLoginError(errorMessage) {
        this.elements.loginErrorText().then((element) => {
            let actualError = element.text();
            assert.equal(actualError, errorMessage, "Error message displayed: " + actualError);
        });
    }

    clickForgotPasswordLink() {
        this.elements.forgotPasswordLink().click();
    }

}

export const loginPage = new LoginPage();