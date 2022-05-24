import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TweetsStateView } from '../../data-access/model/tweets-state-view.model';
import { TweetsService } from '../../data-access/service/tweets.service';
import { generateDefaultTweetsQuery, TweetsQuery } from '../../data-access/model/tweets-query.model';

@Component({
  selector: 'twitter-clone-ws-tweet-list-page',
  templateUrl: './tweet-list.page.html',
  styleUrls: ['./tweet-list.page.scss']
})
export class TweetListPageComponent implements OnInit {
  public readonly infiniteScrollDistance: number = 1;
  public readonly infiniteScrollThrottle: number = 50;
  public readonly scrollContainerSelector: string = '.main-wrapper';
  public readonly fromRoot: boolean = true;
  public tweetsView$: Observable<TweetsStateView> = this.tweetsService.getTweetsStateView$();

  constructor(private tweetsService: TweetsService) { }

  ngOnInit(): void {
    this.fetchTweets();
  }

  public loadMoreTweets(isLoading: boolean, query: TweetsQuery | null) {
    if (isLoading || !query) { return }

    this.fetchTweets(query.nextPage())
  }

  private fetchTweets(query?: TweetsQuery): void {
    if (!query) {
      return this.tweetsService.fetchTweets(generateDefaultTweetsQuery())
    }
    return this.tweetsService.fetchTweets(query)
  }
}
