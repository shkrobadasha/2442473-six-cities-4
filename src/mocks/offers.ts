import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: 'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg'
  },
  {
    id: '2',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 80,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    previewImage: 'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg'
  },
  {
    id: '3',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 1200,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg'
  },
  {
    id: '4',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg'
  },
];
