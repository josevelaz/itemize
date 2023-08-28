import { SearchInput } from './SearchInput/SearchInput'
import React from 'react'
import { useTvMaze } from 'utils'
import { TVShows } from './TVShowsList/TVShowsList'
import { Screen } from './Screen/Screen'

function App() {
  const [query, setQuery] = React.useState('')
  const { data, isLoading, error, isError } = useTvMaze('search/shows', [
    'q',
    query
  ])
  return (
    <Screen>
      <h1 className="text-4xl font-bold">Search your Favorite TV Shows!</h1>
      <SearchInput
        placeholder="Search for a show"
        onDebounce={(query) => setQuery(query)}
      />
      <TVShows shows={data} isLoading={isLoading} />
    </Screen>
  )
}

export default App
