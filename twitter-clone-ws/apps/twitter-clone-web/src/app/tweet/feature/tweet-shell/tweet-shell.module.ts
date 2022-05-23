import { NgModule } from '@angular/core';
import { TweetShellRoutingModule } from './tweet-shell-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTweetState from '../../data-access/state/tweet-state.reducer';
import { TweetStateEffects } from '../../data-access/state/tweet-state.effects';
import { HttpClientModule } from '@angular/common/http';
import { TweetRestService } from '../../data-access/service/tweet.rest.service';

@NgModule({
  imports: [
    TweetShellRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromTweetState.TWEET_STATE_FEATURE_KEY,
      fromTweetState.reducer
    ),
    EffectsModule.forFeature([TweetStateEffects]),
  ],
  providers: [TweetRestService],
})
export class TweetShellModule { }
