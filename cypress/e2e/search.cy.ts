import * as Search from '../support/actions/search.actions'
import * as Results from '../support/actions/results.actions'

before('Navigate to DuckDuckGo Page', () => {
  cy.visit('')
})

describe('DuckDuckGo Search', () => {
  it('Should search "Android" and assert it is being shown', () => {
    Search.searchText('Android')
    Results.checkDisplayedResults('Android', 'www.android.com')
  })

  it('Should Validate if Regions Size is Greater Than 10', () => {
    Results.checkRegionsArraySize(10)
  })
})
