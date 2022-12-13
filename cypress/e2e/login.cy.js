import LoginPage from '../pages/LoginPage'

describe('Log In Page', () => {

  beforeEach(() => {
    // Open the log in page before each test
    const loginPage = new LoginPage();
    loginPage.visit();
  })

  it('All Expected Elements Are Visible', () => {
    // Verifies that all expected elements are visible
    const loginPage = new LoginPage();

    loginPage.getLogInWithGithubButton().should('be.visible');
    loginPage.getLogInWithGoogleButton().should('be.visible');
    loginPage.getLogInWithSSOButton().should('be.visible');
    loginPage.getLogInWithEmailButton().should('be.visible');
    loginPage.getSignUpLink().should('be.visible');
  })

  it('Non-existent Users Cannot Log In via Email', () => {
    // Verifies that a non-existent user cannot log in via email
    const logInPage = new LoginPage();

    const logInForm = logInPage.openLoginWithEmail();
    logInForm.logIn(`i-definitely-${Date.now()}@dont.exist`, Date.now());
    logInForm.getErrorMessage().should('contain', 'Incorrect email address or password');
  })
})