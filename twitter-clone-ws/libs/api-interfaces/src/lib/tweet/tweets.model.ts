import { TweetPost } from './tweet-post.model';

export interface TweetsResp {
  take: number;
  skip: number;
  tweets: TweetPost[];
}
