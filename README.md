# Cypress Log In Page UI Tests
A repository containing a UI tests for the Cypress Log In page, using Cypress.

## Usage

**tldr:**

```
$ git clone git@github.com:nbaldzhiev/cypress-login-page-test-suite.git && cd cypress-login-page-test-suite
$ ./runner.sh
```

This runs the tests within a Docker container, which gets created out of an image based on the Dockerfile.

To run the tests without Docker:
```
$ git clone git@github.com:nbaldzhiev/cypress-login-page-test-suite.git && cd cypress-login-page-test-suite
$ npm install
$ npm run cypress:run
```

## Tests Results

[mochawesome](https://www.npmjs.com/package/mochawesome) is used as the reporter. The report is saved to the default directory `mochawesome-report` at 
the root of the project. It contains a HTML file with the results, which contains a nice visual representation of the results.

[Test results screenshot example](https://i.ibb.co/pd6GkQK/Screenshot-2022-12-14-at-22-44-14.png)

## GitHub Actions Workflow

The test suite can also be ran from a GitHub Actions workflow - `run-cypress-login-tests`, in the same repo. 
Its event trigger is `workflow_dispatch`, so it is meant to be ran manually.

The tests results are uploaded as a workflow artifact, which is an archive containing the `mochawesome-report` directory where the HTML report 
can be found as well.

[Workflow screenshot example](https://i.ibb.co/Wpsdcc6/Screenshot-2022-12-14-at-22-43-35.png)
