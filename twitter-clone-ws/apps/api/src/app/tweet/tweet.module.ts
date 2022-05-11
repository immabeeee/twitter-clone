import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetController } from './controller/tweet.controller';
import { TweetPostEntity } from './models/post.entity';
import { TweetService } from './service/tweet.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TweetPostEntity])
    ],
    providers: [TweetService],
    controllers: [TweetController]
})
export class TweetModule { }
