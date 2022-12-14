# syntax=docker/dockerfile:1

FROM cypress/included:12.1.0
ENTRYPOINT [ "" ]

WORKDIR /cypress-login-tests-app

COPY cypress cypress
COPY package.json package.json
COPY cypress.config.js cypress.config.js
COPY run_tests.sh run_tests.sh
RUN npm install

CMD ./run_tests.sh && tail -f /dev/null
