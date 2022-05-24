import { User } from "../auth/user.model";

export interface TweetPost {
  id?: number;
  body?: string;
  createdAt?: Date;
  author?: User;
}
