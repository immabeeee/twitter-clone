import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards
} from '@nestjs/common';
import { Role, TweetPost, TweetsResp } from '@twitter-clone-ws/api-interfaces';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Roles } from '../../auth/decorator/roles.decorator';
import { JwtGuard } from '../../auth/guard/jwt.guard';
import { RolesGuard } from '../../auth/guard/roles.guard';
import { AuthorGuard } from '../guard/author.guard';
import { TweetService } from '../service/tweet.service';
import { LoggerService } from './../../shared/logger/service/logger.service';

@Controller('tweet')
export class TweetController {
  private readonly apiName = '[TWEET API]';

  constructor(
    private readonly tweetService: TweetService,
    private loggerService: LoggerService
  ) {}

  @Roles(Role.ADMIN, Role.PREMIUM, Role.USER)
  @UseGuards(JwtGuard, RolesGuard)
  @Post()
  create(@Body() post: TweetPost, @Request() req): Observable<TweetPost> {
    this.loggerService.log(
      `${this.apiName} - create tweet with data: ${JSON.stringify(post)}`
    );
    return this.tweetService.createPost(req.user, post);
  }

  @Get()
  find(
    @Query('take') take = 1,
    @Query('skip') skip = 1
  ): Observable<TweetsResp> {
    this.loggerService.log(
      `${this.apiName} - take: ${take} tweets and skip: ${skip}`
    );
    return this.tweetService.find(take, skip);
  }

  @Roles(Role.ADMIN, Role.PREMIUM)
  @UseGuards(JwtGuard, RolesGuard, AuthorGuard)
  @Put(':id')
  update(
    @Param() id: number,
    @Body() post: TweetPost
  ): Observable<UpdateResult> {
    this.loggerService.log(
      `${this.apiName} - update tweet with id: ${id} and data: ${JSON.stringify(
        post
      )}`
    );
    
    return this.tweetService.updatePost(id, post);
  }

  @Delete(':id')
  delete(@Param() id: number): Observable<DeleteResult> {
    this.loggerService.log(`${this.apiName} - delete tweet with id ${id}`);
    return this.tweetService.deletePost(id);
  }
}
