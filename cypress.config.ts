import * as report from 'cypress-mochawesome-reporter/plugin'
import { defineConfig } from 'cypress'
import 'dotenv/config'

export default defineConfig({
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
    setupNodeEvents(on) {
      report(on)
    },
  },
})
