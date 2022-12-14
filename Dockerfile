# syntax=docker/dockerfile:1

FROM cypress/included:12.1.0

WORKDIR /cypress-login-page-test-suite-app

COPY cypress cypress
COPY package.json package.json
COPY cypress.config.js cypress.config.js

RUN npm install && npx cypress run --reporter mochawesome
