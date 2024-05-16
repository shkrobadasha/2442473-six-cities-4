import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';

import PlacesCardList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import Logo from '../../components/logo/logo';
import { Offers } from '../../types/offer';
import CitiesList from '../../components/list-cities/list-cities';
import { Cities } from '../../const-information/constant';
import SortingOptions from '../../components/sorting-options/sorting-options';

type MainScreenProps = {
  favorites: Offers;
}

function MainScreen({favorites}: MainScreenProps):JSX.Element{
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);

  const [currentCityOffers, setCurrentCityOffers] = useState<Offers>(offers);

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);


  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <Link to="/favorites">
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favorites.length}</span>
                    </Link>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">citiesName</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities ={Cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${currentCityOffers.length} places to stay in ${city}`}</b>
              <SortingOptions/>
              <PlacesCardList offers={currentCityOffers} typeOfList={'defoult'}/>
            </section>
            <section className="cities__map map">
              <Map city={currentCityOffers.length > 0 ? currentCityOffers[0].city : offers[0].city} points={currentCityOffers}/>

            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
