const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  screenshotsFolder: "test-reports",
  video: false,
  videosFolder: "test-reports",
  videoUploadOnPasses: false,
  trashAssetsBeforeRuns: true,

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  e2e: {
    specPattern: '/Users/zeyuwang/Desktop/JS notes/my-app/cypress/integration/**/*',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});

