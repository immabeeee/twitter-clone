import { Injectable } from '@angular/core';
import { User, WebUserUi } from '@twitter-clone-ws/api-interfaces';
import jwt_decode from 'jwt-decode';

@Injectable()
export class JwtService {
  private readonly TOKEN_KEY = 'token';

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) as string;
  }

  getDecodedToken(): WebUserUi | null {
    const token = this.getToken();

    if (!token) {
      return null;
    }

    return jwt_decode(token);
  }
}
