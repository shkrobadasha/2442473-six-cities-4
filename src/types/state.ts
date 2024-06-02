import { AuthorizationStatus } from '../const-information/constant';
import {store} from '../store';
import { FullOffer, Offers } from './offer';
import { Reviews } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userLogin: string | null;
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
  favorites: Offers;
};

export type OtherState = {
  city: string;
  sortingOption: string;
  error: string | null;
};
