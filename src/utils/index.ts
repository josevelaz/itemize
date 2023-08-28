import React from 'react'
import { useQuery } from 'react-query'

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export function useTvMaze<Response = any>(
  endpoint: string,
  [parameter, query]: [string, string]
) {
  const url = `http://api.tvmaze.com/${endpoint}?${parameter}=${query}`

  return useQuery<Response>(
    [endpoint, query],
    () => fetch(url).then((res) => res.json()),
    { keepPreviousData: true, staleTime: 10 * 60 * 1000 }
  )
}
