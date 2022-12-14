import LoginPage from '../pages/LoginPage'

describe('Log In Page', () => {

  const gitHubName = 'GitHub';
  const googleName = 'Google';

  beforeEach(() => {
    // Clear the cookies and open the log in page before each test
    cy.clearCookies();
    const loginPage = new LoginPage();
    loginPage.visit();
  });

  it('All Expected Elements Are Visible', () => {
    // Verifies that all expected elements are visible
    const loginPage = new LoginPage();

    loginPage.assertThat.allPageElementsAreVisible();
  });

  it('Non-existent Users Cannot Log In via Email', () => {
    // Verifies that a non-existent user cannot log in via email
    const logInPage = new LoginPage();

    logInPage.openLogInWithEmail().logIn(`i-definitely-${Date.now()}@dont.exist`, Date.now());
    logInPage.assertThat.logInFormErrorMessageExists();
  });

  [{[gitHubName]: 'https://github.com/'}, {[googleName]: 'https://accounts.google.com/'}].forEach(
    (authProvider) => {
      it(`Opening the Log In With ${Object.keys(authProvider)[0]} Page`, () => {
        // A parameterised test to verify that clicking on the Log in with <auth provider> button opens the 
        // corresponding page. Currently, the newly opened page is only verified through the URL
        const loginPage = new LoginPage();

        if (Object.keys(authProvider)[0] === gitHubName) {
          loginPage.openLogInWithGitHub();
        } else if (Object.keys(authProvider)[0] === googleName) {
          loginPage.openLogInWithGoogle();
        }

        // on('url:changed') is necessary because cy.url() does not capture the new URL for some reason
        cy.on('url:changed', (newUrl) => {
          expect(newUrl).to.contain(Object.values(authProvider)[0]);
        });
      })
    }
  );

})