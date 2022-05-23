import { TweetPost } from "@twitter-clone-ws/api-interfaces";
import { TweetsQuery } from "./tweets-query.model";

export interface TweetsStateView {
    tweets: TweetPost[];
    query: TweetsQuery | null;
    isLoading: boolean;
    errorMessage: string | null;
}