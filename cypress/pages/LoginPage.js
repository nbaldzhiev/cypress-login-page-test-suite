// This file contains a page model class abstraction of the Log in page of Cypress

class LogInEmailForm {
  get emailInput() {
    // Gets and returns the Email input element
    return cy.get("input#email");
  }

  get passwordInput() {
    // Gets and returns the Password input element
    return cy.get("input#password");
  }

  get submitButton() {
    // Gets and returns the Submit button
    return cy.get('button[type="submit"]');
  }

  getErrorMessage(foundTimeout = 10000) {
    // Gets and returns the error message present in case of an error
    // Overrides the timeout for finding the element with 10 seconds
    return cy.get('div[class="error-message"]', { timeout: foundTimeout });
  }

  logIn(email, password) {
    // Fills in the form by using the parameter values and submits
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.submitButton.click();
  }
}

class LoginPage {
  get logInWithGithubButton() {
    // Gets and returns the "Log in with GitHub" button
    return cy.get('button[class*="provider-github"]');
  }

  get logInWithGoogleButton() {
    // Gets and returns the "Log in with Google" button
    return cy.get('button[class*="provider-google"]');
  }

  get logInWithSSOButton() {
    // Gets and returns the "Log in with SSO" button
    return cy.get('button[class*="provider-sso"]');
  }

  get logInWithEmailButton() {
    // Gets and returns the "Log in with Email" button
    return cy.get('button[class*="provider-email"]');
  }

  get signUpLink() {
    // Gets and returns the "Sign up" link
    return cy.get('a[href="/signup"]');
  }

  get logInForm() {
    return new LogInEmailForm();
  }

  openLogInWithEmail() {
    // Clicks on the "Log in with email" button and returns the form as an LogInEmailForm object
    this.logInWithEmailButton.click();
    return this.logInForm;
  }

  openLogInWithGitHub() {
    // Clicks on the Log in with GitHub button to open the page
    this.logInWithGithubButton.click();
  }

  openLogInWithGoogle() {
    // Clicks on the Log in with Google button to open the page
    this.logInWithGoogleButton.click();
  }

  get assertThat() {
    // Returns a LoginPageAssertions object to get access to page assertions
    return new LoginPageAssertions(this);
  }
}

class LoginPageAssertions {
  constructor(logInPageObj) {
    this.logInPageObj = logInPageObj;
  }

  allPageElementsAreVisible() {
    // Asserts that all expected elements on the page are visible
    cy.elementIsVisible(this.logInPageObj.logInWithGithubButton);
    cy.elementIsVisible(this.logInPageObj.logInWithGoogleButton);
    cy.elementIsVisible(this.logInPageObj.logInWithSSOButton);
    cy.elementIsVisible(this.logInPageObj.logInWithEmailButton);
    cy.elementIsVisible(this.logInPageObj.signUpLink);
  }

  logInFormErrorMessageExists() {
    // Asserts that the log in form's error message exists with the corrent content
    this.logInPageObj.logInForm
      .getErrorMessage()
      .should("contain", "Incorrect email address or password");
  }
}

export default LoginPage;
