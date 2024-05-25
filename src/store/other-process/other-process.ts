import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const-information/constant';
import {OtherState} from '../../types/state.ts';

const initialState: OtherState = {
  city: 'Paris',
  sortingOption: 'Popular',
  error: null,
};

export const otherProcess = createSlice({
  name: NameSpace.Other,
  initialState,
  reducers: {
    cityChange(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    sortTypeSelect(state, action: PayloadAction<string>) {
      state.sortingOption = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { cityChange, sortTypeSelect, setError } = otherProcess.actions;
