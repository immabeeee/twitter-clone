import { TweetPost } from '../tweet/tweet-post.model';
import { Role } from './role.enum';

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: Role;
  tweets?: TweetPost[];
}
