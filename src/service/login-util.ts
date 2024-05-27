const LOGIN_KEY_NAME = 'six-cities-email';

export const saveLogin = (login: string): void => {
  localStorage.setItem(LOGIN_KEY_NAME, login);
};

export const getLogin = (): string => {
  const token = localStorage.getItem(LOGIN_KEY_NAME);
  return token ?? '';
};


export const dropLogin = (): void => {
  localStorage.removeItem(LOGIN_KEY_NAME);
};
