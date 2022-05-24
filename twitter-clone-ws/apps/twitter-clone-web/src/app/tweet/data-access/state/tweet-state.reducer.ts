import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { TweetPost } from '@twitter-clone-ws/api-interfaces';
import { generateDefaultTweetsQuery, TweetsQuery } from '../model/tweets-query.model';

import * as TweetStateActions from './tweet-state.actions';

export const TWEET_STATE_FEATURE_KEY = 'tweetState';

export interface State extends EntityState<TweetStateEntity> {
  tweets: TweetPost[];
  tweetsQuery: TweetsQuery | null;
  tweetsLoading: boolean;
  tweetsError: string | null;
}

export interface TweetStatePartialState {
  readonly [TWEET_STATE_FEATURE_KEY]: State;
}

export interface TweetStateEntity { }

export const tweetStateAdapter: EntityAdapter<TweetStateEntity> =
  createEntityAdapter<TweetStateEntity>();

export const initialState: State = tweetStateAdapter.getInitialState({
  tweets: [],
  tweetsQuery: null,
  tweetsLoading: false,
  tweetsError: null
});

const tweetStateReducer = createReducer(
  initialState,
  on(TweetStateActions.fetchTweets, (state, action) => ({
    ...state,
    tweetsQuery: action.query,
    tweetsLoading: true,
    tweetsError: null
  })),
  on(TweetStateActions.fetchTweetsSuccess, (state, action) => ({
    ...state,
    tweets: [...state.tweets, ...action.resp.tweets],
    tweetsQuery: state.tweetsQuery ? state.tweetsQuery.update(action.resp.take, action.resp.skip) : generateDefaultTweetsQuery(),
    tweetsLoading: false,
    tweetsError: null
  })),
  on(TweetStateActions.fetchTweetsFail, (state, action) => ({
    ...state,
    tweetsLoading: false,
    tweetsError: action.message
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return tweetStateReducer(state, action);
}
