import {Offers} from '../../types/offer';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../const-information/constant';
import EmptyFavorites from '../../components/empty-favorites/empty-favorites';
import ListFavorites from '../../components/favorites-list/favorites-list';

type FavoriteOffer = {
  favoriteOffers: Offers;
}

function Favorites({favoriteOffers}:FavoriteOffer): JSX.Element {
  return (
    <div className ="page">
      <Header favorites={favoriteOffers}/>
      <main className ="page__main page__main--favorites">
        <div className ="page__favorites-container container">
          {favoriteOffers.length > 0 ? (
            <ListFavorites favorites={favoriteOffers}/>
          ) : (
            <EmptyFavorites/>
          )}

        </div>
      </main>
      <footer className="footer container">
        <Link to = {AppRoute.Main} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width='64' height='33'/>
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
