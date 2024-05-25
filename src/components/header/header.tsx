import {Link} from 'react-router-dom';
import {Offers} from '../../types/offer.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/index.ts';
import { AppRoute, AuthorizationStatus } from '../../const-information/constant.ts';
import { logoutAction } from '../../store/api-actions.ts';
import Logo from '../logo/logo.tsx';
import { getAuthorizationStatus, getuserEmail } from '../../store/user-process/selectors.ts';


type HeaderProps = {
  favorites: Offers;
}

function Header({favorites}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthorizationStatus);
  const userEmail = useAppSelector(getuserEmail);
  const handleSignOut = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <Logo/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <div className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {user === AuthorizationStatus.Auth ? (
                    <Link to= {AppRoute.Favorites}>
                      <span className="header__user-name user__name">{userEmail}</span>
                      <span className="header__favorite-count">{favorites.length}</span>
                    </Link>
                  ) : (
                    <Link to={AppRoute.Login} className="header__nav-link">Login</Link>
                  )}
                </div>
              </li>
              {user === AuthorizationStatus.Auth && (
                <li className="header__nav-item">
                  <Link to="/login" className="header__nav-link" onClick={handleSignOut}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
