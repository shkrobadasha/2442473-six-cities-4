import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const-information/constant';
import {UserState} from '../../types/state.ts';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userLogin: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { requireAuthorization} = userProcess.actions;
