import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type RatingProps = {
  rating: number | null
}
export function Rating({ rating }: RatingProps) {
  if (!rating) return null
  const fullStars = Math.floor(rating / 2)
  const halfStars = rating % 2 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStars

  return (
    <div className="flex space-x-1">
      {Array.from({ length: fullStars }).map((_, idx) => (
        <FontAwesomeIcon icon={faStar} key={idx} className="text-yellow-500" />
      ))}
      {halfStars ? (
        <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
      ) : null}
      {Array.from({ length: emptyStars }).map((_, idx) => (
        <FontAwesomeIcon
          icon={faStar}
          key={idx + fullStars + halfStars}
          className="text-gray-300"
        />
      ))}
    </div>
  )
}
