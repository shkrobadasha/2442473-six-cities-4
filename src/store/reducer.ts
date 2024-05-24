import { createReducer } from '@reduxjs/toolkit';
import { cityChangs, sortingSelection, colorSelectPoint, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setError, setLogin, loadOfferData, sendReview} from './action';
import { FullOffer, Offers} from '../types/offer';
import { AuthorizationStatus } from '../const-information/constant';
import { Reviews } from '../types/review';

type StateType = {
  city: string;
  offers: Offers;
  sortOption: string;
  selectPoint: {
    id: string;
  } | null;
  AuthorizationStatus: AuthorizationStatus;
  isOfferataLoading: boolean;
  error: string | null;
  login: string | null;
  currentOffer: {
    offerInfo: FullOffer | null;
    nearestOffers: Offers;
    reviews: Reviews;
  };
};


const initialState: StateType = {
  city: 'Paris',
  offers: [],
  sortOption: 'Popular',
  selectPoint: null,
  AuthorizationStatus: AuthorizationStatus.Unknown,
  isOfferataLoading: false,
  error: null,
  login:null,
  currentOffer: {
    offerInfo: null,
    nearestOffers: [],
    reviews: [],
  },
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChangs, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sortingSelection, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(colorSelectPoint, (state, {payload}) => {
      state.selectPoint = payload;
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
    })
    .addCase(setLogin, (state, action) => {
      state.login = action.payload;
    })
    .addCase(loadOfferData, (state, { payload }) => {
      state.selectPoint = { id: payload.offerInfo.id };
      state.currentOffer = { ...payload };
    })
    .addCase(sendReview, (state, { payload }) => {
      state.currentOffer.reviews = [...state.currentOffer.reviews, payload];
    });
});
