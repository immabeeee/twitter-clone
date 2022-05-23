import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TweetsQuery } from '../model/tweets-query.model';
import { TweetsStateView } from '../model/tweets-state-view.model';
import * as Actions from '../state/tweet-state.actions';
import * as Selectors from '../state/tweet-state.selectors';

@Injectable()
export class TweetsService {
    constructor(private store: Store) { }

    public getTweetsStateView$(): Observable<TweetsStateView> {
        return this.store.pipe(select(Selectors.getTweetsState));
    }

    public fetchTweets(query: TweetsQuery): void {
        this.store.dispatch(Actions.fetchTweets({
            query
        }))
    }
}
