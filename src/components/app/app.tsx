import Main from '../../pages/main/main';

type AppScreenProps = {
  placesToVisit: number;
}

function App({placesToVisit}: AppScreenProps): JSX.Element{
  return (
    <Main placesToVisit = {placesToVisit} /> //возвращаем компонент,
    //который собираемся отрисовать (у нас это Main)
  );
}

export default App;
