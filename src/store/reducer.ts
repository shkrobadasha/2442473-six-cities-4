import { createReducer } from '@reduxjs/toolkit';
import { cityChangs } from './action';
import { offerListFilling } from './action';
import { offers } from '../mocks/offers';
import { Offers } from '../types/offer';
//в стейте описываем начальное состояние (город и список предложений по аренде)
// функцию, которая принимает стейт и действие
type StateType = {
  city: string;
  offers: Offers;
}

const initialState: StateType = {
  city: 'Paris',
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChangs, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offerListFilling, (state) =>{
      state.offers = offers;
    });
});
