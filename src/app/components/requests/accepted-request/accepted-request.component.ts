import { Component, OnInit } from "@angular/core";
import { AdminAuthService } from "src/app/services/admin-auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-accepted-request",
  templateUrl: "./accepted-request.component.html",
  styleUrls: ["./accepted-request.component.css"]
})
export class AcceptedRequestComponent implements OnInit {
  AcceptedRequests: any;
  // @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  constructor(public myAdminAuthService: AdminAuthService, public http: HttpClient) { }
  selectedFile = null;
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  get f() {
    return this.myForm.controls;
  }
  ngOnInit() {
    this.getAccepted();
  }
  getAccepted() {
    this.myAdminAuthService.getAcceptedRequests().subscribe((resp: any) => {
      this.AcceptedRequests = resp;
      console.log(resp);
    });
  }
  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource').value);

    this.http.post('https://lms-doctoroid.herokuapp.com/upload', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }



}
