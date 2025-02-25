import locators from '../locators/locators'

class ResultsPage {
  checkDisplayedArticle(text: string) {
    cy.get(locators.results.article).eq(0).should('contain', text)
  }

  checkArticleUrl(text: string) {
    cy.get(locators.results.articleUrl).eq(0).should('contain', text)
  }

  regionsClick() {
    cy.get(locators.results.regionsButton).click()
  }

  regionsArraySize(size: number) {
    cy.get(locators.results.regionsArray)
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
