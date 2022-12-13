const LoginPageURL = 'https://cloud.cypress.io/login';

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

    constructor(pageUrl = LoginPageURL) {
        this.pageUrl = pageUrl;
    }

    visit() {
        // Opens the Login page if not already open
        if (cy.url() !== LoginPageURL) {
            cy.visit(this.pageUrl);
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

    getLogInWithSSOButton() {
        // Gets and returns the "Log in with SSO" button
        return cy.get('button[class*="provider-sso"]');
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