import locators from '../locators/locators'

class SearchPage {
  searchInput(text: string) {
    cy.get(locators.search.searchInput).type(text)
  }

  searchButtonClick() {
    cy.get(locators.search.searchButton).click()
  }
}

export default new SearchPage()
