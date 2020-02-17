import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  BASE_URL = 'https://lms-doctoroid.herokuapp.com'
  loggedIn = false
  constructor(public myHttpClient: HttpClient) { }

  userSignUp(data) {
    return this.myHttpClient.post(this.BASE_URL + '/dashboard/signup', data)
  }

  userSignIn(data) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

    };
    return this.myHttpClient.post(this.BASE_URL + '/dashboard/signin', JSON.stringify(data), httpOptions)
  }
  getUserData(id) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true
    };
    return this.myHttpClient.get(`${this.BASE_URL}/getpatients/${id}`, httpOptions)
  }
}
