import { createAction } from '@reduxjs/toolkit';


export const cityChangs = createAction<string>('city/cityChangs');

export const offerListFilling = createAction('offer/offerListFilling');

export const sortingSelection = createAction<string>('sorting/selectOptionSorting');

export const colorSelectPoint = createAction<string | null>('points/selectPoint');

