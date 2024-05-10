import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../types/state';

//это обертка для хуков
//для взаимодействия с хранилищем будем использовать хуки

//помогает диспамчить только те действия, которые мы создавали
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
