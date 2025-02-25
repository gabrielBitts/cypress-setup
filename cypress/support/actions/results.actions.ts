import ResultsScreen from '../pages/results.screen'

export function checkDisplayedResults(text: string, url: string) {
  ResultsScreen.checkDisplayedArticle(text)
  ResultsScreen.checkArticleUrl(url)
}

export function checkRegionsArraySize(size: number) {
  ResultsScreen.regionsClick()
  ResultsScreen.regionsArraySize(size)
}
