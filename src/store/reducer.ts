import { createReducer } from '@reduxjs/toolkit';
import { cityChangs, sortingSelection, colorSelectPoint, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setError} from './action';
import { Offers} from '../types/offer';
import { AuthorizationStatus } from '../const-information/constant';

type StateType = {
  city: string;
  offers: Offers;
  sortOption: string;
  selectPoint: string | null;
  AuthorizationStatus: AuthorizationStatus;
  isOfferataLoading: boolean;
  error: string | null;
};


const initialState: StateType = {
  city: 'Paris',
  offers: [],
  sortOption: 'Popular',
  selectPoint: null,
  AuthorizationStatus: AuthorizationStatus.Unknown,
  isOfferataLoading: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChangs, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sortingSelection, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(colorSelectPoint, (state, action) => {
      state.selectPoint = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOfferataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.AuthorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
