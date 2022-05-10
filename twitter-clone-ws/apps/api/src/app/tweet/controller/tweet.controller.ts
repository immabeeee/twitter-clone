import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Observable } from "rxjs";
import { DeleteResult, UpdateResult } from "typeorm";
import { TweetPost } from "../models/post.interface";
import { TweetService } from "../service/tweet.service";

@Controller('tweet')
export class TweetController {

    constructor(private readonly tweetService: TweetService) { }

    @Post()
    create(@Body() post: TweetPost): Observable<TweetPost> {
        return this.tweetService.createPost(post);
    }

    @Get()
    findAll(): Observable<TweetPost[]> {
        return this.tweetService.findAllTweets();
    }

    @Put(':id')
    update(
        @Param() id: number,
        @Body() post: TweetPost
    ): Observable<UpdateResult> {
        return this.tweetService.updatePost(id, post);
    }

    @Delete(':id')
    delete(@Param() id: number): Observable<DeleteResult> {
        return this.tweetService.deletePost(id)
    }
}