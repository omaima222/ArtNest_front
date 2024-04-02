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
    return this.httpClient.post<{ token : string }>(this.url + "auth/register", user)
      .pipe(
        map(response => {
          this.setToken(response.token)
          return response.token
        }),
      );
  }

  signIn(user: SigninDto): Observable<string> {
    this.removeToken();
    return this.httpClient.post<{ token : string }>(this.url + 'auth/authenticate', user)
      .pipe(
        map(response => {
          this.setToken(response.token)
          return response.token
        }),
      );
  }


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
