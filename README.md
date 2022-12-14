# Cypress Log In Page UI Tests
A repository containing a UI tests for the Cypress Log In page, using Cypress.

## Usage

### GitHub Actions Workflow

The test suite can be ran from a GitHub Actions workflow - https://github.com/nbaldzhiev/cypress-login-page-test-suite/actions/workflows/run-cypress-login-tests.yml. Its event trigger is `workflow_dispatch`, so it is meant to be ran manually.

The workflow allows for running the tests on the github runner itself (without a container, default) or in a container. This is controlled through a workflow input of type boolean.

The tests results are uploaded as a workflow artifact, which is an archive containing the `mochawesome-report` directory where the HTML report 
can be found.

[Workflow screenshot example](https://i.ibb.co/Wpsdcc6/Screenshot-2022-12-14-at-22-43-35.png)

> **_NOTE:_**  When the tests are ran in a container, the workflow is successful even if there are failing tests. TODO: fix that
**tldr:**

### Locally

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

When running from a GitHub Actions workflow, the directory is uploaded to the workflow as an artifact.

[Test results screenshot example](https://i.ibb.co/pd6GkQK/Screenshot-2022-12-14-at-22-44-14.png)
