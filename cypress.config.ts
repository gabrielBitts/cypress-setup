import { defineConfig } from 'cypress'

module.exports = defineConfig({
  chromeWebSecurity: false,
  retries: 2,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Tests Report',
      videoOnFailOnly: true
    },
  },
  e2e: {
    baseUrl: 'https://start.duckduckgo.com/',
    specPattern: 'cypress/{api,e2e}/*.cy.ts',
    testIsolation: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
