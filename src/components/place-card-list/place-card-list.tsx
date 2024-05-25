import { useAppSelector } from '../../hooks';
import {Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import sortingFunction from '../../util';
import { memo } from 'react';
import { getSortingOption } from '../../store/other-process/selectors';

type PlaceCardList = {
  offers: Offers;
  typeOfList: 'nearest' | 'defoult';
};

function PlacesCardList({offers, typeOfList}: PlaceCardList): JSX.Element {
  const currnetSortOptions = useAppSelector(getSortingOption);

  return (
    <div className={`${typeOfList === 'nearest' ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}`}>
      {sortingFunction(offers, currnetSortOptions)?.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} typeOfCard = {typeOfList}/>
      ))}
    </div>
  );
}

const PlacesCardListMemo = memo(PlacesCardList);
export default PlacesCardListMemo;
