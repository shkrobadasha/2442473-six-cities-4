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
import { Offers } from '../../types/offer';

type AppScreenProps = {
  placesToVisit: number;
  offers: Offers;
}

function App({placesToVisit, offers}: AppScreenProps): JSX.Element{
  const favourite = offers.filter((o) => o.isFavorite);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main placesToVisit = {placesToVisit} offers = {offers} />}
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
                <Favorites favoriteOffers = {favourite} />
              </PrivateRoute>
            }
          />
          <Route
            element={<Offer />}
            path={AppRoute.Offer}
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
