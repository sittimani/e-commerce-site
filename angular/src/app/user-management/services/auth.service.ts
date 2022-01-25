import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { serverAddress } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedin: BehaviorSubject<boolean>
  isLoggedin$: Observable<boolean>

  constructor(private http: HttpClient) {
    this.isLoggedin = new BehaviorSubject<boolean>(false)
    this.isLoggedin$ = this.isLoggedin.asObservable()
  }

  register(user: any) {
    return this.http.post<string>(`${serverAddress}register`, user)
  }

  login(creditionals: any) {
    return this.http.post(`${serverAddress}login`, creditionals)
  }

  setToken(authResponse: any) {
    localStorage.setItem("token", authResponse.token)
  }

  getToken() {
    const token = localStorage.getItem("token")
    if (token)
      return token
    return ""
  }

  logout() {
    localStorage.removeItem("token")
  }

  isUserLoggedin(value:boolean) {
    this.isLoggedin.next(value)
  }
}
