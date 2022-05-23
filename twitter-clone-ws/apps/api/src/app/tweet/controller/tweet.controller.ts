import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TweetPost, TweetsResp } from "@twitter-clone-ws/api-interfaces";
import { Observable } from "rxjs";
import { DeleteResult, UpdateResult } from "typeorm";
import { TweetService } from "../service/tweet.service";
import { LoggerService } from './../../shared/logger/service/logger.service'

@Controller('tweet')
export class TweetController {
    private readonly apiName = '[TWEET API]'

    constructor(private readonly tweetService: TweetService, private loggerService: LoggerService) { }

    @Post()
    create(@Body() post: TweetPost): Observable<TweetPost> {
        this.loggerService.log(`${this.apiName} - create tweet with data: ${JSON.stringify(post)}`)
        return this.tweetService.createPost(post);
    }

    @Get()
    find(@Query('take') take: number = 1, @Query('skip') skip: number = 1): Observable<TweetsResp> {
        this.loggerService.log(`${this.apiName} - take: ${take} tweets and skip: ${skip}`)
        return this.tweetService.find(take, skip);
    }

    @Put(':id')
    update(
        @Param() id: number,
        @Body() post: TweetPost
    ): Observable<UpdateResult> {
        this.loggerService.log(`${this.apiName} - update tweet with id: ${id} and data: ${JSON.stringify(post)}`)
        return this.tweetService.updatePost(id, post);
    }

    @Delete(':id')
    delete(@Param() id: number): Observable<DeleteResult> {
        this.loggerService.log(`${this.apiName} - delete tweet with id ${id}`)
        return this.tweetService.deletePost(id)
    }
}