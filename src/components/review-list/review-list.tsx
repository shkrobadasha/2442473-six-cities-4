import ReviewItem from '../review-item/review-item.tsx';
import {Reviews} from '../../types/review.ts';

type ReviewList = {
  reviews: Reviews;
};

export default function ReviewsList({ reviews }: ReviewList): JSX.Element{
  return (
    <div>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
    </div>
  );
}
