import { AuthorizationStatus } from '../const-information/constant.js';
import {store} from '../store/index.js';
import { FullOffer, Offers } from './offer.js';
import { Reviews } from './review.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
};

export type OffersState = {
  currentOffer: {
    offerInfo: FullOffer | null;
    nearestOffers: Offers;
    reviews: Reviews;
  };
  offers: Offers;
  selectPoint: {
    id: string;
  } | null;
  isOffersDataLoading: boolean;
};

export type OtherState = {
  city: string;
  sortingOption: string;
  error: string | null;
};
