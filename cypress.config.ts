import { defineConfig } from 'cypress'

module.exports = defineConfig({
  chromeWebSecurity: false,
  retries: 2,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, spec',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'cypress-mochawesome-reports',
    },
  },
  e2e: {
    baseUrl: 'https://start.duckduckgo.com/',
    specPattern: 'cypress/e2e/*.cy.{js, jsx, ts}',
    testIsolation: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
