const LoginPageURL = 'https://cloud.cypress.io/login';

class LogInEmailForm {

    getEmailInput() {
        // Gets and returns the Email input element
        return cy.get('input#email');
    }

    getPasswordInput() {
        // Gets and returns the Password input element
        return cy.get('input#password');
    }

    getSubmitButton() {
        // Gets and returns the Submit button
        return cy.get('button[type="submit"]');
    }

    getErrorMessage(foundTimeout = 10000) {
        // Gets and returns the error message present in case of an error
        // Overrides the timeout for finding the element with 10 seconds
        return cy.get('div[class="error-message"]', {timeout: foundTimeout})
    }

    logIn(email, password) {
        // Fills in the form by using the parameter values and submits
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

    get logInForm() {
        return new LogInEmailForm();
    }

    openLoginWithEmail() {
        // Clicks on the "Log in with email" button and returns the form as an LogInEmailForm object
        this.visit();
        this.getLogInWithEmailButton().click();
        return this.logInForm;
    }

    get assertThat() {
        return new LoginPageAssertions(this);
    }

}

class LoginPageAssertions {

    constructor(logInPageObj) {
        this.logInPageObj = logInPageObj;
    }

    allPageElementsAreVisible() {
        this.logInPageObj.getLogInWithGithubButton().should('be.visible');
        this.logInPageObj.getLogInWithGoogleButton().should('be.visible');
        this.logInPageObj.getLogInWithSSOButton().should('be.visible');
        this.logInPageObj.getLogInWithEmailButton().should('be.visible');
        this.logInPageObj.getSignUpLink().should('be.visible');
    }

    logInFormErrorMessageExists() {
        this.logInPageObj.logInForm.getErrorMessage().should('contain', 'Incorrect email address or password');
    }

}

export default LoginPage;