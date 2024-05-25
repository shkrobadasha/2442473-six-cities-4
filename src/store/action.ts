import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const-information/constant';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
