import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { TweetsResp } from "@twitter-clone-ws/api-interfaces";
import { TweetsQuery } from "../model/tweets-query.model";

@Injectable()
export class TweetRestService {
    private readonly endpoint: string = 'http://localhost:3000'

    constructor(
        private readonly httpClient: HttpClient,
    ) { }

    public fetchTweets(query: TweetsQuery): Observable<TweetsResp> {
        const path: string = '/api/tweet'
        return this.httpClient.get<TweetsResp>(`${this.endpoint}${path}?take=${query.take}&skip=${query.skip}`);
    }
}
