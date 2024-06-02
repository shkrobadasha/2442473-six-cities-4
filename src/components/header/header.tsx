import {Link} from 'react-router-dom';
import {Offers} from '../../types/offer.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/index.ts';
import { AppRoute, AuthorizationStatus } from '../../const-information/constant.ts';
import { logoutAction } from '../../store/api-actions.ts';
import Logo from '../logo/logo.tsx';
import { getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import { getLogin } from '../../service/login-util.ts';
import { getAvatar } from '../../service/avatar.ts';


type HeaderProps = {
  favorites: Offers;
}

function Header({favorites}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthorizationStatus);
  const userLogin = getLogin();
  const avatar = getAvatar();
  const handleSignOut = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <div className="header__nav-link header__nav-link--profile">
                  {user === AuthorizationStatus.Auth ? (
                    <img src={avatar} className="header__avatar-wrapper"
                      style={{
                        borderRadius: '50%',
                        width: '81',
                        height: '41',
                        marginRight: '8px',
                      }}
                    >
                    </img>
                  ) : (
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                  )}
                  {user === AuthorizationStatus.Auth ? (
                    <Link to= {AppRoute.Favorites}>
                      <span className="header__user-name user__name">{userLogin}</span>
                      <span className="header__favorite-count">{favorites.length}</span>
                    </Link>
                  ) : (
                    <Link to={AppRoute.Login} className="header__nav-link">Login</Link>
                  )}
                </div>
              </li>
              {user === AuthorizationStatus.Auth && (
                <li className="header__nav-item">
                  <Link to={AppRoute.Login} className="header__nav-link" onClick={handleSignOut}>
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
