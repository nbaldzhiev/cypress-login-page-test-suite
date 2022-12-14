# syntax=docker/dockerfile:1

FROM cypress/included:12.1.0
ENTRYPOINT [ "" ]

WORKDIR /cypress-login-tests-app

COPY cypress cypress
COPY package.json package.json
COPY cypress.config.js cypress.config.js

RUN npm install

CMD npm run cypress:run || tail -f /dev/null
