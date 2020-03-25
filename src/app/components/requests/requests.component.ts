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
  pending_status: string = 'Pending';

  req_id: any = ''
  p_id: any = ''

  getcurrentRowData(row) {


    this.selectedRequest = row;
    this.req_id = row._id;
    this.p_id = row.req_p_id;



    this.getPatientData(row._id)
  }

  // Adding Patient data
  getPatientData(row) {
    const { req_id } = this
    const reqData = { req_id }

    this.myAdminAuthService.reqPatientData(reqData).subscribe((response: any) => {
      this.patientData = response;
    })
    console.log(this.patientData)
  }

  // Getting Requests and fill in table
  ngOnInit() {
    this.myAdminAuthService.getRequests().subscribe((response: any) => {
      this.requests = response;

    })

  }

  //Accepting and rejection status
  AcceptedStatus() {
    const { req_id, req_status } = this
    const data = {
      req_id, req_status
    }
    this.myAdminAuthService.statusChange(data).subscribe((response: any) => {
      this.req_status = this.accepted_status;
    })


  }
  PendingStatus() {
    const { req_id, req_status } = this
    const data = {
      req_id, req_status
    }
    this.myAdminAuthService.statusChange(data).subscribe((response: any) => {
      this.req_status = this.pending_status;
      console.log(req_status);
    })


  }
  RejectedStatus() {
    const { req_id, req_status } = this
    const data = {
      req_id, req_status
    }
    this.myAdminAuthService.statusChange(data).subscribe((response: any) => {
      this.req_status = this.rejected_status;
      console.log(req_status);

    })

  }

  // Request Deletion
  deleteRequest(data) {
    const { req_id, p_id } = this
    const reqData = { req_id, p_id }
    this.myAdminAuthService.deleteRequest(reqData).subscribe((response: any) => {
      this.ngOnInit();
    })
  }






}


