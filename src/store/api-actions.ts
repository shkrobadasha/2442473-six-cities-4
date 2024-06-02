//модуль с ассинхронными действиями
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {FullOffer, Offer, Offers} from '../types/offer.ts';
import { redirectToRoute} from './action.ts';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const-information/constant.ts';

import {dropToken, saveToken } from '../service/token.ts';
import { UserData } from '../types/user-data.ts';
import { AuthData } from '../types/auth-data.ts';
import { store } from './index.ts';
import { Review, Reviews } from '../types/review.ts';
import { CommentData } from '../types/comment-data.ts';
import { loadFavorites, loadOfferData, loadOffers, sendReview, setOffersDataLoadingStatus, updateOffers } from './offer-process/offer-process.ts';
import { requireAuthorization} from './user-process/user-process.ts';
import { setError } from './other-process/other-process.ts';
import { CheckButton } from '../types/check-buttons.ts';
import { dropLogin, saveLogin } from '../service/login-util.ts';
import { dropAvatar, saveAvatar } from '../service/avatar.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOfferss',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchOfferDataAction = createAsyncThunk<
  void,
  {
    id: string;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOfferData', async ({ id }, { dispatch, extra: api }) => {
  const { data: offerInfo } = await api.get<FullOffer>(
    `${APIRoute.Offers}/${id}`
  );
  const { data: nearestOffers } = await api.get<Offers>(
    `${APIRoute.Offers}/${id}/nearby`
  );
  const { data: reviews } = await api.get<Reviews>(
    `${APIRoute.Comments}/${id}`
  );
  dispatch(loadOfferData({ offerInfo, nearestOffers, reviews }));
});

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Favorite}`);
    dispatch(loadFavorites(data));
  },
);

export const changeFavouriteStatusAction = createAsyncThunk<void, CheckButton, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'changeFavoriteStatus',
    async ({status, offerId}, {extra: api, dispatch}) => {
      const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status}`);
      dispatch(updateOffers(data));
      dispatch(fetchFavoritesAction());
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropLogin();
    dropAvatar();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const sendCommentAction = createAsyncThunk<
  void,
  {
    comment: CommentData;
    id: string;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('sendComment', async ({ comment, id }, { dispatch, extra: api }) => {
  const { data: review } = await api.post<Review>(
    `${APIRoute.Comments}/${id}`,
    {
      comment: comment.comment,
      rating: comment.rating,
    }
  );
  dispatch(sendReview(review));
});

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    saveLogin(email);
    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
    const {data } = await api.get<UserData>(APIRoute.Login);
    saveAvatar(data.avatar);

  },
);
