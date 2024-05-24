import { Reviews } from './review';
import { FullOffer, Offers } from './offer';

export type OfferData = {
  offerInfo: FullOffer;
  nearestOffers: Offers;
  reviews: Reviews;
};
