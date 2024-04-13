import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupDto} from "../../dtos/SignupDto";
import {map, Observable} from "rxjs";
import {SigninDto} from "../../dtos/SigninDto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient){ }

  signUp(user:SignupDto): Observable<string>{
    this.removeToken()
    return this.httpClient.post<{ token : string , user_id : number, role : string  }>(this.url + "auth/register", user)
      .pipe(
        map(response => {
          this.setToken(response.token, response.user_id.toString())
          this.setRole(response.role);
          return response.token
        }),
      );
  }

  signIn(user: SigninDto): Observable<string> {
    this.removeToken();
    return this.httpClient.post<{ token : string, user_id : number, role : string }>(this.url + 'auth/authenticate', user)
      .pipe(
        map(response => {
          this.setToken(response.token, response.user_id.toString())
          this.setRole(response.role);
          return response.token
        }),
      );
  }


  setToken(token: string, user_id : string): void {
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
  }

  setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }


  getUserId(): string | null {
    return localStorage.getItem('user_id');
  }
}
