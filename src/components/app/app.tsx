import {Route, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import {AppRoute} from '../../const-information/constant';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import { AuthorizationStatus } from '../../const-information/constant';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../../browser/history-router/history-router';
import browserHistory from '../../browser/browser-history/browser-history';
import LoadingScreen from '../../pages/loading/loading';
import { getIsOffersDataLoading, getFavorites } from '../../store/offer-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getCity } from '../../store/other-process/selectors';


function App(): JSX.Element{
  const favorites: Offers = useAppSelector(getFavorites);
  const city = useAppSelector(getCity);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main favorites = {favorites} city={city}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <Favorites favoriteOffers = {favorites} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer favorites={favorites}/>}
          />
          <Route
            path="*"
            element={<NotFoundScreen/>}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
