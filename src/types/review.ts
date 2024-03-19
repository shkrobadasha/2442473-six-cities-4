export type User = {
  name: string;
  photo: string;
};

export type Review = {
  id: number;
  user: User;
  text: string;
  img: string;
  rating: number;
  date: string;
};

export type Reviews = Review[];

