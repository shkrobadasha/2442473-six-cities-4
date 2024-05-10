import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';

//создание хранилища
export const store = configureStore({reducer});
