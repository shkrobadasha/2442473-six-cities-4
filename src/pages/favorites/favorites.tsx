import { Offer } from '../../types/offer';
import {Offers} from '../../types/offer';
import PlaceCard from '../../components/place-card/place-card';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const-information/constant';

type FavoriteOffer = {
  favoriteOffers: Offers;
}

function Favorites({favoriteOffers}:FavoriteOffer): JSX.Element {
  const favouriteOffersMap = favoriteOffers.reduce(
    (accumulator: Record<string, Offers>, offer: Offer) => {
      if (offer.city.name in accumulator) {
        accumulator[offer.city.name].push(offer);
      } else {
        accumulator[offer.city.name] = [offer];
      }
      return accumulator;
    },
    {}
  );
  return (
    <div className ="page">
      <Header favorites={favoriteOffers}/>
      <main className ="page__main page__main--favorites">
        <div className ="page__favorites-container container">
          <section className ="favorites">
            <h1 className ="favorites__title">Saved listing</h1>
            <ul className ="favorites__list">

              {Object.keys(favouriteOffersMap).map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favouriteOffersMap[city].map((offer) => (
                      <PlaceCard key={offer.id} offer={offer} typeOfCard = {'defoult'}></PlaceCard>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to = {AppRoute.Main} className="footer__logo-link">
          <Logo/>
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
