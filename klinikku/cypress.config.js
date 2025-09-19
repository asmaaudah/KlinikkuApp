const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://qa-test-six.vercel.app/",
  },

  // timeout global
  defaultCommandTimeout: 10000, 
  pageLoadTimeout: 60000,       
  requestTimeout: 15000,        
});
