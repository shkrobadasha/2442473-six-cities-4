import {Offers} from '../types/offer';
import { reviews } from './reviews';

export const offers: Offers = [
  {
    id: 1,
    hotel: {
      addres: 'Street 3',
      number: '89328439212',
      img: 'img-of-hall'
    },
    city: 'Amsterdam',
    premium: true,
    images: 'img-of-hottel',
    costPerNight: 123,
    favourites: true,
    rating: 4,
    title: 'Castle Of Luxury Pleasures',
    type: 'Apartment',
    review: [reviews[0]]
  },
  {
    id: 2,
    hotel: {
      addres: 'Street 43',
      number: '63736213221',
      img: 'img-of-halls'
    },
    city: 'New York',
    premium: true,
    images: 'img-of-hotel',
    costPerNight: 2300,
    favourites: false,
    rating: 5,
    title: 'Imperial Splendor Hotel',
    type: 'Apartment',
    review: [reviews[1]]
  },
  {
    id: 3,
    hotel: {
      addres: '5 Vetrov Lane',
      number: '13734218221',
      img: 'img01'
    },
    city: 'Paris',
    premium: false,
    images: 'img-of-hotel',
    costPerNight: 80,
    favourites: false,
    rating: 4,
    title: 'Grand Palace Boutique Hotel',
    type: 'Apartment',
    review: [reviews[2]]
  },
  {
    id: 4,
    hotel: {
      addres: 'Severinstr. 199, Германия, Кёльн',
      number: '37354218221',
      img: 'img02'
    },
    city: 'Cologne',
    premium: false,
    images: 'img-of-hotel',
    costPerNight: 105,
    favourites: true,
    rating: 4,
    title: 'Mercure Hotel Severinshof Köln City',
    type: 'Apartment',
    review: [reviews[3]]
  }
];


