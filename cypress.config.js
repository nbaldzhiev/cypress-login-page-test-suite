const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    baseUrl: "https://cloud.cypress.io/login",
  },
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
  },
});
