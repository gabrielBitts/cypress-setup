import SearchPage from '../pages/search.screen'

export function searchText(text: string) {
    SearchPage.searchInput(text)
    SearchPage.searchButtonClick()
  }
