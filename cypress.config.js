const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
