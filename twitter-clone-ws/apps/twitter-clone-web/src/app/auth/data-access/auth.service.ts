import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  Role,
  User,
  WebUserUi
} from '@twitter-clone-ws/api-interfaces';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { AuthRestService } from './auth.rest.service';
import { JwtService } from './jwt.service';
import { SignUpForm } from './model/sign-up-form.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$: BehaviorSubject<WebUserUi | null> =
    new BehaviorSubject<WebUserUi | null>(null);

  constructor(
    private authRestService: AuthRestService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  get isUserLoggedIn(): Observable<boolean> {
    return this.user$.asObservable().pipe(
      switchMap((user: WebUserUi | null) => {
        const isUserAuthenticated = !!user;
        return of(isUserAuthenticated);
      })
    );
  }

  get userRole(): Observable<Role | undefined> {
    return this.user$.asObservable().pipe(
      switchMap((user: WebUserUi | null) => {
        return of(user?.user?.role);
      })
    );
  }

  public signUp({
    firstName,
    lastName,
    email,
    password
  }: SignUpForm): Observable<User> {
    const request: RegisterRequest = {
      firstName,
      lastName,
      email,
      password
    };

    return this.authRestService.signUp(request);
  }

  public signIn({ email, password }: SignUpForm): Observable<LoginResponse> {
    const request: LoginRequest = {
      email,
      password
    };

    return this.authRestService.signIn(request);
  }

  public isUnexpiredTokenInStorage(): Observable<boolean> {
    return of(this.jwtService.getDecodedToken()).pipe(
      map((user: WebUserUi) => {
        const isTokenExpired: boolean = new Date() > new Date(user.exp * 1000);
        if (isTokenExpired) {
          return false;
        } else {
          this.user$.next(user);
          return true;
        }
      })
    );
  }

  public logout(): void {
    this.user$.next(null);
    this.jwtService.clearToken();
    this.router.navigateByUrl('/auth');
  }

  public handleSignInUser(token: string): void {
    this.jwtService.saveToken(token);
    const decodedToken: WebUserUi = this.jwtService.getDecodedToken();
    this.user$.next(decodedToken);
    this.router.navigateByUrl('/tweets');
  }
}
