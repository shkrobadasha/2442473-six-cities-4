//Popular (по умолчанию) — карточки с предложениями отображаются в исходном порядке

import {useState} from 'react';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { sortingSelection } from '../../store/action';

function SortingOptions(): JSX.Element{
  const [isOpen, setIsOpen] = useState(false);

  const sortingOptionSelection = useAppSelector((state) => state.sortOption);
  const dispatch = useAppDispatch();

  const handleSortTypeChange = (sortOption: string) => {
    dispatch(sortingSelection(sortOption));
  };

  return(
    <form className="places__sorting" action="#" method="get" onClick={() => setIsOpen(!isOpen)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortingOptionSelection}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        <li className={`places__option ${sortingOptionSelection === 'Popular' ? 'places__option--active' : ''}`} onClick={() => handleSortTypeChange('Popular')} tabIndex={0}>Popular</li>
        <li className={`places__option ${sortingOptionSelection === 'Price: low to high' ? 'places__option--active' : ''}`} onClick={() => handleSortTypeChange('Price: low to high')} tabIndex={0}>Price: low to high</li>
        <li className={`places__option ${sortingOptionSelection === 'Price: high to low' ? 'places__option--active' : ''}`} onClick={() => handleSortTypeChange('Price: high to low')} tabIndex={0}>Price: high to low</li>
        <li className={`places__option ${sortingOptionSelection === 'Top rated first' ? 'places__option--active' : ''}`} onClick={() => handleSortTypeChange('Top rated first')} tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortingOptions;


