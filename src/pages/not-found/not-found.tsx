
import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element{
  return(
    <section className="catalog">
      <title>Страница не найдена</title>
      <section className="catalog__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </section>
  );
}

export default NotFoundScreen;

