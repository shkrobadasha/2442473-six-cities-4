import {Reviews} from '../types/review';

export const reviews: Reviews = [
  {
    id: 1,
    user: {
      name: 'Jon Donn',
      photo: 'avatar01'
    },
    text: 'My weekend at this place was wonderful!But not so.((',
    img: 'Photo-of-on-Jons-happy-face',
    rating: 4.3,
    date: '21.02.2022'
  },
  {
    id: 2,
    user: {
      name: 'Wanessa Darkin',
      photo: 'avatar02'
    },
    text: 'I visited New York this week! It\'s so magical here that I\'m ready to give 5 stars for any bench under the roof, and here, besides, there are wonderful rooms and polite doormen',
    img: 'Photo-of-city',
    rating: 5.0,
    date: '14.02.2024'
  },
  {
    id: 3,
    user: {
      name: 'Lewis Jordan',
      photo: 'avatar03'
    },
    text: 'A good hotel in the city center, cozy rooms, fresh food, but the cockroaches shocked me!!',
    img: 'Photo-of-cockroaches',
    rating: 4.5,
    date: '21.12.2017'
  },
  {
    id: 4,
    user: {
      name: 'Anna Shern',
      photo: 'avatar04'
    },
    text: 'Everything is just great, the only unpleasant moment is that there are no slippers and the power is not turned on.',
    img: 'Photo-of-hotel-room',
    rating: 4.5,
    date: '14.05.2023'
  }
];


