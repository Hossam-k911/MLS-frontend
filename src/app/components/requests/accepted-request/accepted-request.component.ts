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
  selectedFile: any;
  file_name: any;
  acc_id: any;
  file_id: any;
  existedObj: any;
  res_id: any;
  p_id: any;
  req_id: any
  //form init
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

  submit(id) {
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource').value);

    this.http.post('https://lms-doctoroid.herokuapp.com/upload', formData)
      .subscribe(res => {
        console.log(res);
        this.selectedFile = res;
        alert('Uploaded Successfully.');
        this.match();
        this.acc_id = id;
        this.existedObject();

      })

  }
  match() {
    this.file_name = this.selectedFile.file.originalname
    this.file_id = this.selectedFile.file.id
    console.log(this.file_id)
    console.log(this.file_name)
  }
  existedObject() {
    const { acc_id } = this;
    const accData = { acc_id };
    this.myAdminAuthService.existedAcceptedObject(accData).subscribe((res: any) => {
      this.existedObj = res;
      console.log(this.existedObj);
      this.res_id = this.existedObj[0]._id;
      // console.log(this.existedObj[0]._id);
      this.p_id = this.existedObj[0].accepted_request.req_p_id;
      this.req_id = this.existedObj[0].accepted_request._id;

      console.log(this.p_id);

    })

  }
  addFileToResult() {
    const { res_id, file_id, file_name } = this;
    const fileData = { res_id, file_id, file_name };
    this.myAdminAuthService.AddFile(fileData).subscribe((response: any) => {
      console.log(response);
      this.addResultToPatient();
    })

  }

  addResultToPatient() {
    const { p_id, res_id } = this
    const data = { p_id, res_id };
    this.myAdminAuthService.AddresultToPatient(data).subscribe((response: any) => {
      console.log(response);
      this.deleteRequest();
    })
  }
  deleteRequest() {
    const { req_id, p_id } = this;
    const reqData = { req_id, p_id };
    this.myAdminAuthService
      .deleteRequest(reqData)
      .subscribe((response: any) => {
        this.ngOnInit();
      });
  }
}
