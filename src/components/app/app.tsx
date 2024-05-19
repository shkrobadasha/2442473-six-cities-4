import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import {AppRoute} from '../../const-information/constant';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import { AuthorizationStatus } from '../../const-information/constant';
import { HelmetProvider } from 'react-helmet-async';
import { Reviews } from '../../types/review';
import { Offers } from '../../types/offer';
import { useAppSelector } from '../../hooks';

import LoadingScreen from '../loading-screen/loading-screen';

type AppScreenProps = {
  reviews: Reviews;
}

function App({reviews}: AppScreenProps): JSX.Element{
  const offers: Offers = useAppSelector((state) => state.offers);

  const authorizationStatus = useAppSelector((state) => state.AuthorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOfferataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  const favourites = offers.filter((o) => o.isFavorite);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main favorites = {favourites}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <Favorites favoriteOffers = {favourites} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer reviews={reviews} favorites={favourites}/>}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
