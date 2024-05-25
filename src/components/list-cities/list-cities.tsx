import { memo } from 'react';
import {useAppDispatch} from '../../hooks';
import { cityChange } from '../../store/other-process/other-process';


type CitiesListProps = {
  cities: {name: string; id: number}[];
};

type CityProps = {
  name: string;
  changeCityName: (city: string) => void;
};

const City = ({ name, changeCityName }: CityProps): JSX.Element => (
  <li className="locations__item" onClick={() => changeCityName(name)}>
    <a className="locations__item-link tabs__item" href="#">
      <span>{name}</span>
    </a>
  </li>
);

function CitiesList({ cities }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: string) => {
    dispatch(cityChange((city)));
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City
          key={city.id}
          name={city.name}
          changeCityName={handleCityChange}
        />
      ))}
    </ul>
  );
}

const CitiesListMemo = memo(CitiesList);
export default CitiesListMemo;
