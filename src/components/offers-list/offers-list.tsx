import { Offers } from '../../types/offer';
import PlacesCardListMemo from '../place-cards/place-card-list';
import SortingOptions from '../sorting-options/sorting-options';

type ListOffersProps = {
  city: string;
  offers: Offers;
}


function ListOffers({city, offers}: ListOffersProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${city}`}</b>
      <SortingOptions/>
      <PlacesCardListMemo offers={offers} typeOfList = {'typical'}/>
    </section>
  );
}
export default ListOffers;
