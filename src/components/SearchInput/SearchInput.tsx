import React from 'react'
import { useDebounce } from 'utils'

type SearchInputProps = {
  onDebounce: (query: string) => void
  buttonTitle?: string
  placeholder?: string
}
export function SearchInput(props: SearchInputProps) {
  const [query, setQuery] = React.useState('')
  const debouceQuery = useDebounce(query, 500)

  React.useEffect(() => {
    if (props.onDebounce) {
      props.onDebounce(debouceQuery)
    }
  }, [debouceQuery])

  return (
    <input
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      className="my-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
      placeholder={props.placeholder}
    />
  )
}
