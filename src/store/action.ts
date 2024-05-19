import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const-information/constant';


export const cityChangs = createAction<string>('city/cityChangs');

//export const offerListFilling = createAction('offer/offerListFilling');

export const sortingSelection = createAction<string>('sorting/selectOptionSorting');

export const colorSelectPoint = createAction<string | null>('points/selectPoint');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string | null>('setError');


