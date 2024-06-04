import { useAppSelector } from '../../hooks';
import {Offers} from '../../types/offer';
import PlaceCard from './place-card';
import sortingFunction from '../../util';
import { memo } from 'react';
import { getSortingOption } from '../../store/other-process/selectors';

type PlaceCardList = {
  offers: Offers;
  typeOfList: 'typical' | 'near';
};

function PlacesCardList({offers, typeOfList}: PlaceCardList){
  const currnetSortOptions = useAppSelector(getSortingOption);

  return (
    <div
      className={`${typeOfList === 'typical' ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}
    >
      {sortingFunction(offers, currnetSortOptions)?.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} typeOfCard = {typeOfList}/>
      ))}
    </div>
  );
}

const PlacesCardListMemo = memo(PlacesCardList);
export default PlacesCardListMemo;
