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
      'x-auth-token': this.token
    }),


  };
  constructor(public myHttpClient: HttpClient) { }
  //admin
  userSignUp(data) {
    return this.myHttpClient.post(this.BASE_URL + '/dashboard/signup', data)
  }

  userSignIn(data) {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

    // };
    return this.myHttpClient.post(this.BASE_URL + '/dashboard/signin', JSON.stringify(data), this.httpOptions)
  }



  //patient componenet
  getPatients() {

    return this.myHttpClient.get(`${this.BASE_URL}/getpatients/`, this.httpOptions)
  }
  editPatients(data, id) {

    return this.myHttpClient.put(this.BASE_URL + `/editpatient/${id} `, JSON.stringify(data), this.httpOptions)
  }
  deletePatient(data) {

    return this.myHttpClient.post(this.BASE_URL + '/removepatient', JSON.stringify(data), this.httpOptions)
  }
  getPatientById(id) {
    return this.myHttpClient.get(this.BASE_URL + `/getpatient/${id} `, this.httpOptions)

  }


  //requests component
  getRequests() {

    return this.myHttpClient.get(`${this.BASE_URL}/getreq`, this.httpOptions)
  }
  acceptStatus(data) {

    return this.myHttpClient.post(this.BASE_URL + '/acceptreq', JSON.stringify(data), this.httpOptions)
  }
  rejectStatus(data) {

    return this.myHttpClient.post(this.BASE_URL + '/rejectreq', JSON.stringify(data), this.httpOptions)
  }

  pendingStatus(data) {

    return this.myHttpClient.post(this.BASE_URL + '/pendreq', JSON.stringify(data), this.httpOptions)
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
  getAccepted() {
    return this.myHttpClient.get(this.BASE_URL + `/getreqs`, this.httpOptions)
  }
  getAcceptedRequests() {
    return this.myHttpClient.get(this.BASE_URL + '/accepted', this.httpOptions)
  }
  uploadResFile(data) {
    return this.myHttpClient.post(this.BASE_URL + '/upload', JSON.stringify(data), this.httpOptions)
  }
  Downlaodfile(data) {

    return this.myHttpClient.post(this.BASE_URL + '/download', JSON.stringify(data), this.httpOptions)
  }

  existedAcceptedObject(data) {

    return this.myHttpClient.post(this.BASE_URL + '/resbyaccid', JSON.stringify(data), this.httpOptions)
  }
  AddFile(data) {

    return this.myHttpClient.post(this.BASE_URL + '/addfile', JSON.stringify(data), this.httpOptions)
  }
  AddresultToPatient(data) {

    return this.myHttpClient.post(this.BASE_URL + '/addresulttopatient', JSON.stringify(data), this.httpOptions)
  }


  //hospital component
  getHospitalInfo() {

    return this.myHttpClient.get(`${this.BASE_URL}/hospitalinfo`, this.httpOptions)
  }


  editHospital(data) {

    return this.myHttpClient.put(this.BASE_URL + `/edithospital `, JSON.stringify(data), this.httpOptions)
  }
  getHospital() {

    return this.myHttpClient.get(this.BASE_URL + `/gethospital `, this.httpOptions)
  }



  //medicines component
  getMediciensinfo() {

    return this.myHttpClient.get(`${this.BASE_URL}/getmedicines`, this.httpOptions)
  }
  addMedicine(data) {

    return this.myHttpClient.post(this.BASE_URL + '/addmedicine', JSON.stringify(data), this.httpOptions)
  }
  editMedicine(data, id) {

    return this.myHttpClient.put(this.BASE_URL + `/editmedicine/${id} `, JSON.stringify(data), this.httpOptions)
  }
  getMedicine(id) {

    return this.myHttpClient.get(this.BASE_URL + `/getMedicinebyid/${id} `, this.httpOptions)
  }

  deleteMedicine(data) {

    return this.myHttpClient.post(this.BASE_URL + '/delmedicine', JSON.stringify(data), this.httpOptions)
  }



  //category component
  listCategories() {

    return this.myHttpClient.get(this.BASE_URL + `/listcategories `, this.httpOptions)
  }
  deleteCategory(data) {
    return this.myHttpClient.post(this.BASE_URL + '/delcategory', JSON.stringify(data), this.httpOptions)
  }
  addCategory(data) {

    return this.myHttpClient.post(this.BASE_URL + '/addcategory', JSON.stringify(data), this.httpOptions)
  }
  getCategory(id) {

    return this.myHttpClient.get(this.BASE_URL + `/getcategorybyid/${id} `, this.httpOptions)
  }


  //tests component
  deleteTest(data) {
    return this.myHttpClient.post(this.BASE_URL + '/deltest', JSON.stringify(data), this.httpOptions)
  }
  addTest(data) {

    return this.myHttpClient.post(this.BASE_URL + '/addtest', JSON.stringify(data), this.httpOptions)
  }

  //get results files
  getResultsFiles() {

    return this.myHttpClient.get(this.BASE_URL + `/files `, this.httpOptions)
  }
  getResults() {
    return this.myHttpClient.get(this.BASE_URL + `/getreqs `, this.httpOptions)

  }
}
