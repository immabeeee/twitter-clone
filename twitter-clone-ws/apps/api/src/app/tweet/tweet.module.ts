import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { LoggerModule } from '../shared/logger/logger.module';
import { TweetController } from './controller/tweet.controller';
import { AuthorGuard } from './guard/author.guard';
import { TweetPostEntity } from './model/post.entity';
import { TweetService } from './service/tweet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TweetPostEntity]),
    LoggerModule,
    AuthModule
  ],
  providers: [TweetService, AuthorGuard],
  controllers: [TweetController]
})
export class TweetModule {}
