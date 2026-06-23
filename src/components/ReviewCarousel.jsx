import { reviews } from '../data/reviews.js'
import ReviewCard from './ReviewCard.jsx'

export default function ReviewCarousel() {
  return (
    <div className="mt-12 flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
      {reviews.map((review) => <ReviewCard key={`${review.name}-${review.state}`} review={review} />)}
    </div>
  )
}
