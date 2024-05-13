import { createReducer } from '@reduxjs/toolkit';
import { cityChangs, offerListFilling, sortingSelection} from './action';
import { offers } from '../mocks/offers';
import { Offers} from '../types/offer';

type StateType = {
  city: string;
  offers: Offers;
  sortOption: string;
};


const initialState: StateType = {
  city: 'Paris',
  offers: offers,
  sortOption: 'Popular',

};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChangs, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offerListFilling, (state) =>{
      state.offers = offers;
    })
    .addCase(sortingSelection, (state, action) => {
      state.sortOption = action.payload;

    });
});
