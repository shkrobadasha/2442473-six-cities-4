import { createReducer } from '@reduxjs/toolkit';
import { cityChangs, offerListFilling, sortingSelection, colorSelectPoint} from './action';
import { offers } from '../mocks/offers';
import { Offers} from '../types/offer';

type StateType = {
  city: string;
  offers: Offers;
  sortOption: string;
  selectPoint: string | null;
};


const initialState: StateType = {
  city: 'Paris',
  offers: offers,
  sortOption: 'Popular',
  selectPoint: null,

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
    })
    .addCase(colorSelectPoint, (state, action) => {
      state.selectPoint = action.payload;

    });
});
