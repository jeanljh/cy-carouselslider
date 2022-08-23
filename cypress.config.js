const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  scrollBehavior: 'center',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.doc2us.com',
  },
})
