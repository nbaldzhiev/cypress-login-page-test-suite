const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
  },
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
  },
});
