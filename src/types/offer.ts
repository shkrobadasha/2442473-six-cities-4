import {Review} from '../types/review';

export type Hotel = {
  addres: string;
  number: string;
  img: string;
};


export type Offer = {
  id: number;
  hotel: Hotel;
  city: string;
  premium: boolean;
  images: string;
  costPerNight: number;
  favourites: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  type: 'Apartment' | 'Room' | 'House' | 'Hotel';
  review: Review[];


}

export type Offers = Offer[];

