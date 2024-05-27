import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { APIRoute, AuthorizationStatus, FavouriteStatus } from '../const-information/constant';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { changeFavouriteStatusAction } from '../store/api-actions';

type AddToFavouritesProps = {
  isFavorite: boolean;
  id: string;
  width: string;
  heigth: string;
  buttonText: string;
  buttonClass: string;
  activeClass: string;
  iconClass: string;
};

function AddToFavouritesButton(props: AddToFavouritesProps): JSX.Element {
  const {
    isFavorite: initialFavoriteStatus,
    id,
    buttonText,
    width,
    heigth,
    buttonClass,
    activeClass,
    iconClass,
  } = props;

  const [isFavorite, setIsFavorite] = useState(initialFavoriteStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    setIsFavorite(initialFavoriteStatus);
  }, [initialFavoriteStatus, id]);

  const handleBookmarkClick = async () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(APIRoute.Login);
      return;
    }

    setIsSubmitting(true);

    try {
      await dispatch(
        changeFavouriteStatusAction({
          offerId: id,
          status: isFavorite ? FavouriteStatus.Remove : FavouriteStatus.Add,
        })
      ).unwrap();

      setIsFavorite(!isFavorite);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onBookmarkClick = () => {
    handleBookmarkClick();
  };

  return (
    <button
      className={`bookmark-button button ${buttonClass} ${isFavorite ? activeClass : ''}`}
      type="button"
      disabled={isSubmitting}
      onClick={onBookmarkClick}
    >
      <svg
        className={`bookmark-icon ${iconClass}`}
        width={width}
        height={heigth}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{buttonText}</span>
    </button>
  );
}

export default AddToFavouritesButton;
