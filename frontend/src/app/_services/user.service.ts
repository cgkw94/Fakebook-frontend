import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8082';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: any) {
    return this.httpclient.post(`${this.PATH_OF_API}/authenticate`, loginData, {
      headers: this.requestHeader,
    });
  }

  public signUp(signUpData: any) {
    console.log(signUpData);
    return this.httpclient.post(
      `${this.PATH_OF_API}/registerNewUser`,
      signUpData,
      {
        headers: this.requestHeader,
      }
    );
  }

  //testing
  public forUser() {
    return this.httpclient.get(`${this.PATH_OF_API}/forUser`, {
      responseType: 'text',
    });
  }
  //testing
  public forAdmin() {
    return this.httpclient.get(`${this.PATH_OF_API}/forAdmin`, {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRole: string) {
    let isMatch = false;

    const userRole: any = this.userAuthService.getRoles();

    if (allowedRole === userRole) {
      isMatch = true;
      return isMatch;
    } else {
      isMatch = false;
      return isMatch;
    }
  }
}
