import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  BASE_URL = 'https://lms-doctoroid.herokuapp.com'
  loggedIn = false;
  token = localStorage.getItem('x-auth-token')
  public selectedRequest: any = {}
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-auth-token': this.token,
      // " Access-Control-Allow-Origin": "*"
      // 'cors': 'Access-Control-Allow-Origin'
    }),
    withCredentials: true,

  };
  constructor(public myHttpClient: HttpClient) { }

  userSignUp(data) {
    return this.myHttpClient.post(this.BASE_URL + '/dashboard/signup', data)
  }

  userSignIn(data) {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

    // };
    return this.myHttpClient.post(this.BASE_URL + '/dashboard/signin', JSON.stringify(data), this.httpOptions)
  }
  getPatients() {

    return this.myHttpClient.get(`${this.BASE_URL}/getpatients/`, this.httpOptions)
  }
  getRequests() {

    return this.myHttpClient.get(`${this.BASE_URL}/getreq`, this.httpOptions)
  }
  getHospitalInfo() {

    return this.myHttpClient.get(`${this.BASE_URL}/hospitalinfo`, this.httpOptions)
  }


  getMediciensinfo() {

    return this.myHttpClient.get(`${this.BASE_URL}/getmedicines`, this.httpOptions)
  }

  statusChange(data) {

    return this.myHttpClient.put(this.BASE_URL + '/editreq', JSON.stringify(data), this.httpOptions)
  }


  reqPatientData(id) {
    return this.myHttpClient.post(this.BASE_URL + '/reqpatientinfo', JSON.stringify(id), this.httpOptions)
  }

  deleteRequest(data) {

    return this.myHttpClient.post(this.BASE_URL + '/delrequest', JSON.stringify(data), this.httpOptions)
  }


  editRequest(data) {

    return this.myHttpClient.put(this.BASE_URL + '/editreq', JSON.stringify(data), this.httpOptions)
  }
  addMedicine(data) {

    return this.myHttpClient.post(this.BASE_URL + '/addmedicine', JSON.stringify(data), this.httpOptions)
  }
  deleteMedicine(data) {

    return this.myHttpClient.post(this.BASE_URL + '/delmedicine', JSON.stringify(data), this.httpOptions)
  }



}
