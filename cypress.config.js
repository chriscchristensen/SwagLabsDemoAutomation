const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nvjc1r',
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
