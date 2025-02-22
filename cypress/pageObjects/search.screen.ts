class SearchPage {
  elements = {
    searchInput: () => cy.get('#searchbox_input'),
    searchButton: () => cy.get("[aria-label='Search']"),
  }

  typeSearchText(text: string) {
    this.elements.searchInput().type(text)
  }
  searchButtonClick() {
    this.elements.searchButton().click()
  }
}

export default new SearchPage()
