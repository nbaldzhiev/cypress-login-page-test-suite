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
})