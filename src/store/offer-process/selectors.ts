import {State} from '../../types/state';
import { NameSpace } from '../../const-information/constant';

export const getOffers = (state: State) => state[NameSpace.Offers].offers;
export const getIsOffersDataLoading = (state: State) => state[NameSpace.Offers].isOffersDataLoading;
export const getCurrentOffer = (state: State) => state[NameSpace.Offers].currentOffer;
export const getselectPoint = (state: State) => state[NameSpace.Offers].selectPoint;
export const getReviews = (state: State) => state[NameSpace.Offers].currentOffer.reviews;
