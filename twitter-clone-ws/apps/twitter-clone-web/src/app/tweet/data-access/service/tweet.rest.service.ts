import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TweetsResp } from '@twitter-clone-ws/api-interfaces';
import { TweetsQuery } from '../model/tweets-query.model';
import { environment } from './../../../../environments/environment';

@Injectable()
export class TweetRestService {
  constructor(private readonly httpClient: HttpClient) {}

  public fetchTweets(query: TweetsQuery): Observable<TweetsResp> {
    const path = `tweet?take=${query.take}&skip=${query.skip}`;
    return this.httpClient.get<TweetsResp>(`${environment.baseApiUrl}/${path}`);
  }
}
