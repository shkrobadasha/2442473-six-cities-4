import { memo } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { cityChange } from '../../store/other-process/other-process';
import { getCity } from '../../store/other-process/selectors';


type CitiesListProps = {
  cities: {name: string; id: number}[];
};

type CityProps = {
  name: string;
  changeCityName: (city: string) => void;
  isActive: boolean;
};

const City = ({ name, changeCityName, isActive }: CityProps): JSX.Element => (
  <li className="locations__item" onClick={() => changeCityName(name)}>
    <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#">
      <span>{name}</span>
    </a>
  </li>
);

function CitiesList({ cities }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);
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
          isActive={city.name === currentCity}
        />
      ))}
    </ul>
  );
}

const CitiesListMemo = memo(CitiesList);
export default CitiesListMemo;
