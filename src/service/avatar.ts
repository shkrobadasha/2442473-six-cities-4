const AVATAR_KEY_NAME = 'six-cities-profile-picture';

export const saveAvatar = (picture: string): void => {
  localStorage.setItem(AVATAR_KEY_NAME, picture);
};

export const getAvatar = (): string => {
  const token = localStorage.getItem(AVATAR_KEY_NAME);
  return token ?? '';
};


export const dropAvatar = (): void => {
  localStorage.removeItem(AVATAR_KEY_NAME);
};
