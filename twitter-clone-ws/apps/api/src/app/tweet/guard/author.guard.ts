import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Role, TweetPost, User } from '@twitter-clone-ws/api-interfaces';
import { map, Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';
import { TweetService } from '../service/tweet.service';

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private tweetService: TweetService
  ) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { user, params }: { user: User; params: { id: number } } = request;

    if (!user || !params) return false;

    if (user.role === Role.ADMIN) return true;

    const userId: number = user.id;
    const tweetId: number = params.id;

    return this.authService.findUserById(userId).pipe(
      switchMap((user: User) => {
        return this.tweetService.findPostById(tweetId).pipe(
          map((tweetPost: TweetPost) => {
            const isAuthor = user.id === tweetPost.author.id;
            return isAuthor;
          })
        );
      })
    );
  }
}
