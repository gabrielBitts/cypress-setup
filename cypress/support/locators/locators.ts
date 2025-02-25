const locators = {
  search: {
    searchInput: '#searchbox_input',
    searchButton: "[aria-label='Search']",
  },
  results: {
    article: '[data-testid="result"]',
    articleUrl: '[data-testid="result-extras-url-link"]',
    regionsButton: '[data-testid="region-filter-label"]',
    regionsArray: '[data-testid="dropdown-options"] > div',
  },
}

export default locators
