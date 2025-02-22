import SearchPage from '../pageObjects/search.screen'
import ResultsPage from '../pageObjects/results.screen'

before('Navigate to DuckDuckGo Page', () => {
  cy.visit('')
})

describe('DuckDuckGo Search', () => {
  it('Should search "Android" and assert it is being shown', () => {
    SearchPage.typeSearchText('Android')
    SearchPage.searchButtonClick()
    ResultsPage.checkDisplayedText('Android')
    ResultsPage.checkDisplayedUrl('www.android.com')
  })

  it('Should Validate if Regions Size is Greater Than 10', () => {
    ResultsPage.clickOnRegions()
    ResultsPage.checkRegionsArraySize(10)
  })
})
