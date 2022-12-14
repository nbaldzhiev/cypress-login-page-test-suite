const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    baseUrl: "https://cloud.cypress.io/login",
    screenshotOnRunFailure: false,
  },
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
  },
});
