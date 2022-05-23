import { createAction, props } from '@ngrx/store';
import { TweetsResp } from '@twitter-clone-ws/api-interfaces';
import { TweetsQuery } from '../model/tweets-query.model';

export const fetchTweets = createAction(
  '[TweetState/API] Fetch Tweet s',
  props<{ query: TweetsQuery }>()
);

export const fetchTweetsSuccess = createAction(
  '[TweetState/API] Fetch Tweets Success',
  props<{ resp: TweetsResp }>()
);

export const fetchTweetsFail = createAction(
  '[TweetState/API] Fetch Tweets Fail',
  props<{ message: string }>()
);