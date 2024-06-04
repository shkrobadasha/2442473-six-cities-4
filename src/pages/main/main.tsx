import {useMemo} from 'react';
import { useAppSelector } from '../../hooks';
import Map from '../../components/map/map';
import { Offers } from '../../types/offer';
import CitiesList from '../../components/list-cities/list-cities';
import { Cities } from '../../const-information/constant';
import Header from '../../components/header/header';
import { getError } from '../../store/other-process/selectors';
import { getOffers } from '../../store/offer-process/selectors';
import ListOffers from '../../components/offers-list/offers-list';
import MainEmpty from '../../components/main-empty/main-empty';

type MainScreenProps = {
  favorites: Offers;
  city: string;
}

function MainScreen({favorites, city}: MainScreenProps):JSX.Element{
  const offers = useAppSelector(getOffers);
  const error = useAppSelector(getError);


  const currentCityOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === city),
    [offers, city]
  );

  return(
    <div className="page page--gray page--main">
      <Header favorites={favorites}/>
      <main className={`page__main page__main--index ${error ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities ={Cities} />
          </section>
        </div>
        {error ? (
          <MainEmpty city={city} />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <ListOffers city={city} offers={currentCityOffers}/>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={currentCityOffers.length > 0 ? currentCityOffers[0].city : offers[0].city} points={currentCityOffers} specialCaseId={undefined}/>
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainScreen;
