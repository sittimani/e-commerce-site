import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverAddress } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user:any) {
    return this.http.post<string>(`${serverAddress}register`, user)
  }

  login(creditionals: any) {
    return this.http.post(`${serverAddress}login`, creditionals)
  }
}
