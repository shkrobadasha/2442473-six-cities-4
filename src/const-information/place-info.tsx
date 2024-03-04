export type PlaceInfo = {
  premium?: boolean;
  photo: string;
  costPerNight: number;
  favourites?: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  type: 'Apartment' | 'Room' | 'House' | 'Hotel';
}
