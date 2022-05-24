import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@twitter-clone-ws/api-interfaces';
import { map, Observable } from 'rxjs';
import { LoggerService } from '../../shared/logger/service/logger.service';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  private readonly apiName = '[AUTH API]';

  constructor(
    private authService: AuthService,
    private loggerService: LoggerService
  ) {}

  @Post('register')
  register(@Body() user: User): Observable<User> {
    this.loggerService.log(
      `${this.apiName} - register new user: ${JSON.stringify(user)}`
    );
    return this.authService.registerAccount(user);
  }

  @Post('login')
  login(@Body() user: User): Observable<{ token: string }> {
    this.loggerService.log(
      `${this.apiName} - login user: ${JSON.stringify(user)}`
    );
    return this.authService
      .login(user)
      .pipe(map((jwt: string) => ({ token: jwt })));
  }
}
