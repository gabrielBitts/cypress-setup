import { defineConfig } from 'cypress'
import 'dotenv/config'

module.exports = defineConfig({
  chromeWebSecurity: false,
  retries: 2,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Tests Report',
      videoOnFailOnly: true,
    },
  },
  e2e: {
    env: {
      apiUrl: process.env.API_URL,
    },
    baseUrl: process.env.BASE_URL,
    specPattern: 'cypress/{api,e2e}/*.cy.ts',
    testIsolation: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
