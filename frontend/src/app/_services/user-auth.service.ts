import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: string) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): string {
    return JSON.parse(localStorage.getItem('roles')!);
  }

  public setToken(jwtToken: string) {
    try {
      localStorage.setItem('jwtToken', jwtToken);
    } catch (err) {
      console.log('error', err);
    }
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken') || '';
  }

  public clear() {
    localStorage.clear();
  }

  public getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    if (this.getToken() === '' || this.getToken === null) {
      return false;
    } else {
      return true;
    }
  }
}
