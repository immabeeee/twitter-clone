import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User
} from '@twitter-clone-ws/api-interfaces';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthRestService {
  private readonly httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private readonly httpClient: HttpClient) {}

  public signUp(request: RegisterRequest): Observable<User> {
    const path = '/auth/register';
    return this.httpClient.post<User>(
      `${environment.baseApiUrl}${path}`,
      request,
      this.httpOptions
    );
  }

  public signIn(request: LoginRequest): Observable<LoginResponse> {
    const path = '/auth/login';
    return this.httpClient.post<LoginResponse>(
      `${environment.baseApiUrl}${path}`,
      request,
      this.httpOptions
    );
  }
}
