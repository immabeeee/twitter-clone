import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TweetPost } from '../models/post.interface';
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

    updatePost(id: number, tweetPost: TweetPost): Observable<UpdateResult> {
        return from(this.tweetPostRepository.update(id, tweetPost));
    }

    deletePost(id: number): Observable<DeleteResult> {
        return from(this.tweetPostRepository.delete(id));
    }
}
