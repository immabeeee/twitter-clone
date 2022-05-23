import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { TweetRestService } from '../service/tweet.rest.service';
import * as TweetStateActions from './tweet-state.actions';
import { mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TweetsResp } from '@twitter-clone-ws/api-interfaces';


@Injectable()
export class TweetStateEffects {
  fetchTweets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TweetStateActions.fetchTweets),
      mergeMap(({ query }) => {
        return this.tweetRestService.fetchTweets(query)
          .pipe(
            switchMap((resp: TweetsResp) => {
              return [
                (TweetStateActions.fetchTweetsSuccess({ resp })),
              ]
            }),
            catchError((error) => of(
              (TweetStateActions.fetchTweetsFail({ message: JSON.stringify(error) }))
            ))
          )
      }
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly tweetRestService: TweetRestService) { }
}
