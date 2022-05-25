import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TweetPost, TweetsResp, User } from '@twitter-clone-ws/api-interfaces';
import { from, map, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TweetPostEntity } from '../model/post.entity';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(TweetPostEntity)
    private readonly tweetPostRepository: Repository<TweetPostEntity>
  ) {}

  createPost(user: User, tweetPost: TweetPost): Observable<TweetPost> {
    tweetPost.author = user;
    return from(this.tweetPostRepository.save(tweetPost));
  }

  findAllTweets(): Observable<TweetPost[]> {
    return from(this.tweetPostRepository.find());
  }

  find(take = 20, skip = 0): Observable<TweetsResp> {
    return from(
      this.tweetPostRepository
        .findAndCount({ take, skip })
        .then(([posts]) => <TweetPost[]>posts)
    ).pipe(
      map((tweets: TweetPost[]) => {
        return {
          take,
          skip,
          tweets
        };
      })
    );
  }

  updatePost(id: number, tweetPost: TweetPost): Observable<UpdateResult> {
    console.log("id: ", id);
    console.log("tweetPost: ", tweetPost);
    return from(this.tweetPostRepository.update(id, tweetPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.tweetPostRepository.delete(id));
  }

  findPostById(id: number): Observable<TweetPost> {
    return from(
      this.tweetPostRepository.findOne({ id }, { relations: ['author'] })
    );
  }
}
