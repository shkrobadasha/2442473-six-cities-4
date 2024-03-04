
//Дизайн остаётся на ваше усмотрение.
// В самом простом случае, это может быть страница с текстом «404 Not Found»
//и ссылкой для перехода на главную страницу приложения.
//На эту страницу пользователь будет перенаправлен в случае
//обращения к несуществующей странице (например, через адресную строку
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

