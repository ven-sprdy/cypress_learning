class ForgotPasswordPage {

    constructor() {
        this.url = "/web/index.php/auth/requestPasswordResetCode";
    }

    checkForgotPasswordHeading(forgotPasswordHeading) {
        cy.get('.orangehrm-forgot-password-title').then((element) => {
            assert.equal(element.text(), forgotPasswordHeading, 'Forgot password heading: ' + element.text());
        });
    }

}

export const forgotPasswordPage = new ForgotPasswordPage();