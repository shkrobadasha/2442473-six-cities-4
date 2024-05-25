import { NameSpace } from '../../const-information/constant';
import {State} from '../../types/state';

export const getCity = (state: State) => state[NameSpace.Other].city;
export const getSortingOption = (state: State) => state[NameSpace.Other].sortingOption;
export const getError = (state: State) => state[NameSpace.Other].error;
