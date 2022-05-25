import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '../shared/logger/logger.module';
import { TweetController } from './controller/tweet.controller';
import { TweetPostEntity } from './model/post.entity';
import { TweetService } from './service/tweet.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TweetPostEntity]),
        LoggerModule
    ],
    providers: [TweetService],
    controllers: [TweetController]
})
export class TweetModule { }
