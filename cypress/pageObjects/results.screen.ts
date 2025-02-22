class ResultsPage {
  elements = {
    articleLocator: () => cy.get('[data-testid="result"]'),
    articleUrl: () => cy.get('[data-testid="result-extras-url-link"]'),
    regionsLocator: () => cy.get('[data-testid="region-filter-label"]'),
    regionsArray: () => cy.get('[data-testid="dropdown-options"] > div'),
  }

  checkDisplayedText(text: string) {
    this.elements.articleLocator().eq(0).should('contain', text)
  }

  checkDisplayedUrl(url: string) {
    this.elements.articleUrl().eq(0).should('contain', url)
  }

  clickOnRegions() {
    this.elements.regionsLocator().click()
  }

  checkRegionsArraySize(size: number) {
    this.elements
      .regionsArray()
      .eq(2)
      .children('div')
      .then(($divs) => {
        const array = $divs.toArray()
        const slicedArray = array.slice(1)
        expect(slicedArray.length).to.be.greaterThan(size)
      })
  }
}

export default new ResultsPage()
