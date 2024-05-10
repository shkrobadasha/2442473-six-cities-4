import { createAction } from '@reduxjs/toolkit';

export const cityChangs = createAction<string>('city/cityChangs');

export const offerListFilling = createAction('offer/offerListFilling');


