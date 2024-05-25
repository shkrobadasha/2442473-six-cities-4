import { useAppDispatch } from '../../hooks';
import { highlightMarker } from '../../store/offer-process/offer-process';

//import { selectAndMarkerPoint } from '../../store/action';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';

type OfferInfo = {
  offer: Offer;
  typeOfCard: 'nearest' | 'defoult';
}

function PlaceCard({offer, typeOfCard}:OfferInfo): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div onMouseOver={() => dispatch(highlightMarker({ id: offer.id }))}
      onMouseLeave={() => dispatch(highlightMarker(null))}
    >
      <article className = {`${typeOfCard === 'nearest' ? 'nearest__card place-card' : 'cities__card place-card'}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        {offer.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>)}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className ="place-card__price-value">&euro;{offer.price}</b>
              <span className ="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <div>
              {offer.isFavorite ? (
                <button className ="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              ) : (
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              )}
            </div>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${offer.rating * 20}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </div>
  );
}

export default PlaceCard;
