import LoginPageURL from '../support/e2e'

class LogInEmailForm {

    getEmailInput() {
        return cy.get('input#email');
    }

    getPasswordInput() {
        return cy.get('input#password');
    }

    getSubmitButton() {
        return cy.get('button[type="submit"]');
    }

    logIn(email, password) {
        this.getEmailInput().type(email);
        this.getPasswordInput().type(password);
        this.getSubmitButton().click();
    }

}

class LoginPage {

    visit() {
        // Opens the Login page if not already open
        if (cy.url() !== LoginPageURL) {
            cy.visit('https://cloud.cypress.io/login');
        }
    }

    getLogInWithGithubButton() {
        // Gets and returns the "Log in with GitHub" button
        return cy.get('button[class*="provider-github"]');
    }
    
    getLogInWithGoogleButton() {
        // Gets and returns the "Log in with Google" button
        return cy.get('button[class*="provider-google"]');
    }

    getLogInWithEmailButton() {
        // Gets and returns the "Log in with Email" button
        return cy.get('button[class*="provider-email"]');
    }

    getSignUpLink() {
        // Gets and returns the "Sign up" link
        return cy.get('a[href="/signup"]');
    }

    openLoginWithEmail() {
        // Clicks on the "Log in with email" button and returns the form as an LogInEmailForm object
        this.visit();
        this.getLogInWithEmailButton().click();
        return new LogInEmailForm();
    }

}

export default LoginPage;