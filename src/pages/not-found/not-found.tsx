
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const-information/constant';

function NotFoundScreen(): JSX.Element{
  return(
    <section className="catalog__screen">
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main} >Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;

