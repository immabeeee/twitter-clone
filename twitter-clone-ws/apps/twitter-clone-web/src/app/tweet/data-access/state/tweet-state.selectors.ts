import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TweetsStateView } from '../model/tweets-state-view.model';
import {
  TWEET_STATE_FEATURE_KEY,
  State,
  tweetStateAdapter,
  TweetStateEntity,
} from './tweet-state.reducer';

export const getTweetStateState = createFeatureSelector<State>(
  TWEET_STATE_FEATURE_KEY
);

const { selectAll, selectEntities } = tweetStateAdapter.getSelectors();

export const getTweetsState = createSelector<TweetStateEntity, State, TweetsStateView>(
  getTweetStateState,
  (state: State) => {
    return {
      tweets: state.tweets,
      isLoading: state.tweetsLoading,
      errorMessage: state.tweetsError,
      query: state.tweetsQuery
    }
  }
);

export const getAllTweetState = createSelector(
  getTweetStateState,
  (state: State) => selectAll(state)
);

export const getTweetStateEntities = createSelector(
  getTweetStateState,
  (state: State) => selectEntities(state)
);