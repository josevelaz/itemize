import { faExternalLinkAlt, faTv } from '@fortawesome/free-solid-svg-icons'
import { Rating } from 'components/Rating/Rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { TVMazeShowResponse } from 'utils/types'
type TVShowsProps = {
  shows: TVMazeShowResponse
  isLoading: boolean
}
export function TVShows({ shows, isLoading }: TVShowsProps) {
  if (isLoading) return <FontAwesomeIcon icon={faTv} spin />
  if (!shows) return null
  return (
    <div className="grid grid-cols-4 gap-6 justify-items-center">
      {shows.map(({ show }) => (
        <div
          key={show.id}
          className="bg-white overflow-hidden rounded-xl min-w-lg drop-shadow-md border border-gray-100"
        >
          <img src={show.image?.medium} alt={show.name} />
          <div className="p-4">
            <h3 className="text-xl">{show.name}</h3>
            <a
              href={show.network?.officialSite ?? undefined}
              className="text-blue-500 hover:underline hover:text-blue-600 "
              target="_blank"
            >
              {show.network?.name ?? 'Unkown Network'}
              {show.network?.officialSite ? (
                <FontAwesomeIcon
                  className="ml-2"
                  size="sm"
                  icon={faExternalLinkAlt}
                />
              ) : null}
            </a>
            <Rating rating={show.rating.average} />
          </div>
        </div>
      ))}
    </div>
  )
}
