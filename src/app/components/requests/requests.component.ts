import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean;
  constructor(
    public myAdminAuthService: AdminAuthService,
    public modelService: NgbModal,
    public fb: FormBuilder
  ) { }

  requests: any

  selectedRequest: any = {}
  patientData: any = {}
  req_status: any = ''
  accepted_status: string = 'Accepted';
  rejected_status: string = 'Rejected';

  req_id: any = ''
  p_id: any = ''

  getcurrentRowData(row) {
    this.selectedRequest = row;
    this.req_id = row._id;
    this.p_id = row.req_p_id;
    if (row) {

      this.getPatientData(row._id);
    }

  }

  getPatientData(id) {
    // const { req_id } = this
    // const reqData = { req_id }
    this.myAdminAuthService.reqPatientData(id).subscribe((response: any) => {
      this.patientData = response;
    })
    console.log(this.patientData)
  }

  ngOnInit() {
    this.myAdminAuthService.getRequests().subscribe((response: any) => {
      this.requests = response;

    })

  }
  AcceptedStatus() {
    const { req_id, req_status } = this
    const data = {
      req_id, req_status
    }
    this.myAdminAuthService.statusChange(data).subscribe((response: any) => {
      this.req_status = this.accepted_status;
    })


  }
  RejectedStatus() {
    const { req_id, req_status } = this
    const data = {
      req_id, req_status
    }
    this.myAdminAuthService.statusChange(data).subscribe((response: any) => {
      this.req_status = this.rejected_status;

    })

  }


  deleteRequest(data) {
    const { req_id, p_id } = this
    const reqData = { req_id, p_id }
    this.myAdminAuthService.deleteRequest(reqData).subscribe((response: any) => {
      this.ngOnInit();
    })
  }




  // onSubmit(model) {
  //   this.buildForm();
  // }
  // get f() {
  //   return this.editForm.controls
  // }

  // buildForm() {
  //   this.editForm = this.fb.group({
  //     Name: [null, Validators.required],
  //     phone: [null, Validators.required],
  //     test: [null, Validators.required],
  //     status: [null, Validators.required]



  //   })
  // }

}


