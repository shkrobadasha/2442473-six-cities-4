import {store} from '../store/index.js';

//псевдоним state = типу, который возвращает getState
export type State = ReturnType<typeof store.getState>;

//дает нам тип функции, которая выполняет отправку диспатча
export type AppDispatch = typeof store.dispatch;
