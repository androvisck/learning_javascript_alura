const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "ybrm6g",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  video: true, // recording videos evidence
  
  reported: 'mocawesome', // calling mocawesome package
  
  reporterOptions:{
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  }
});
