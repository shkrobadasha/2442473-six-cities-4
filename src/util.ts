import {Offers} from './types/offer';

export const sortingFunction = (offers: Offers, sortingOption: string): Offers | undefined => {
  const offersForSorting = offers.slice();
  switch (sortingOption) {
    case 'Popular':
      return offersForSorting;
    case 'Price: low to high':
      return offersForSorting.sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return offersForSorting.sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return offersForSorting.sort((a, b) => b.rating - a.rating);
  }
};

export default sortingFunction;
