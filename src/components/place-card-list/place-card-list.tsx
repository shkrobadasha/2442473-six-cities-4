import {Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardList = {
  offers: Offers;
  typeOfList: 'nearest' | 'defoult';
};

function PlacesCardList({offers, typeOfList}: PlaceCardList): JSX.Element {
  return (
    <div className={`${typeOfList === 'nearest' ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}`}>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} typeOfCard = {typeOfList}/>
      ))}
    </div>
  );
}

export default PlacesCardList;
