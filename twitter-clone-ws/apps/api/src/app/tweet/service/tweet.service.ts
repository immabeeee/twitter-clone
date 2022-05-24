import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TweetPost, TweetsResp } from '@twitter-clone-ws/api-interfaces';
import { from, map, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TweetPostEntity } from '../models/post.entity';

@Injectable()
export class TweetService {
    constructor(
        @InjectRepository(TweetPostEntity)
        private readonly tweetPostRepository: Repository<TweetPostEntity>
    ) { }

    createPost(tweetPost: TweetPost): Observable<TweetPost> {
        return from(this.tweetPostRepository.save(tweetPost));
    }

    findAllTweets(): Observable<TweetPost[]> {
        return from(this.tweetPostRepository.find());
    }

    find(take: number = 20, skip: number = 0): Observable<TweetsResp> {
        return from(
            this.tweetPostRepository
                .findAndCount({ take, skip })
                .then(([posts]) => <TweetPost[]>posts))
            .pipe(map((tweets: TweetPost[]) => {
                return {
                    take,
                    skip,
                    tweets
                }
            }))
    }

    updatePost(id: number, tweetPost: TweetPost): Observable<UpdateResult> {
        return from(this.tweetPostRepository.update(id, tweetPost));
    }

    deletePost(id: number): Observable<DeleteResult> {
        return from(this.tweetPostRepository.delete(id));
    }
}
