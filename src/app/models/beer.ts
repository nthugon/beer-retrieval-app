import { Review } from '@app/models/review';

export interface Beer {
  _id?: string;
  abv: number;
  brewery: string;
  enteredBy: string;
  name: string;
  style: string;
  userId: string;
  reviews: Review[];
}
