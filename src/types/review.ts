export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export type Reviews = Review[];
