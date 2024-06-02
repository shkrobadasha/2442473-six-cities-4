import ReviewItem from '../review-item/review-item.tsx';
import {Reviews} from '../../types/review.ts';

type ReviewList = {
  reviews: Reviews;
};

export default function ReviewsList({ reviews }: ReviewList): JSX.Element{
  return (
    <ul className="reviews__list">
      {reviews
        .slice()
        .sort((reviewA, reviewB) => {
          const dateA = new Date(reviewA.date).getTime();
          const dateB = new Date(reviewB.date).getTime();
          return dateB - dateA;
        })
        .slice(0, 10)
        .map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
    </ul>
  );
}
