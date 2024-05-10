//export const Settings = {
//PlacesToVisit: 4};

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Main = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN', //статус по умолчанию (промежуточный статус)
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export const Cities = [
  {
    name: 'Paris',
    id: 1,
  },
  {
    name: 'Brussels',
    id: 2,
  },
  {
    name: 'Cologne',
    id: 3,
  },
  {
    name: 'Amsterdam',
    id: 4,
  },
  {
    name: 'Hamburg',
    id: 5,
  },
  {
    name: 'Dusseldorf',
    id: 6,
  },
];
