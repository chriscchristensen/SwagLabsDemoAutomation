const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'nvjc1r',
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
        on('file:preprocessor', cucumber())
    },
      "specPattern": "**/*.{feature,features,spec.js}",
  },
});
