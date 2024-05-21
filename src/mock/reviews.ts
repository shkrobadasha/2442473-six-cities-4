
import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '1',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatar: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'b67ddfd5-b9we-4a30-8c8d-bd083cd6b62a',
    date: '2014-11-04T11:13:46.569Z',
    user: {
      name: 'Daria Conner',
      avatar: 'https://url-to-image/image.png',
      isPro: true
    },
    comment: 'Very good.',
    rating: 5
  },
];
