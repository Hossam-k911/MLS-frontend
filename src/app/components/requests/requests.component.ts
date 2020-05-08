//imports
import { Component, OnInit } from "@angular/core";
import { AdminAuthService } from "src/app/services/admin-auth.service";

//configurations
declare var $: any;
@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.css"]
})
export class RequestsComponent implements OnInit {

  constructor(
    public myAdminAuthService: AdminAuthService,

  ) { }

  // Initialization
  Requests: any
  selectedRequest: any
  req_id: any
  r_id: any
  p_id: any
  patientData: any
  // Getting Requests and fill in table
  ngOnInit() {
    this.getRequests();
  }
  getRequests() {
    this.myAdminAuthService.getRequests().subscribe((resp: any) => {
      this.Requests = resp;

    })
  }

  getcurrentRowData(row) {
    this.selectedRequest = row;
    this.r_id = row._id;
    this.p_id = row.req_p_id;
    this.getPatientData();
    console.log(this.selectedRequest)
  }

  // Adding Patient data
  getPatientData() {
    const { r_id } = this;
    const reqData = { r_id };

    this.myAdminAuthService
      .reqPatientData(reqData)
      .subscribe((response: any) => {
        this.patientData = response;
      });
    // console.log(this.patientData);
  }
  // Request Deletion
  matchId(id) {
    this.req_id = id;
    console.log(this.req_id)
    console.log(id);
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



  AcceptedStatus() {
    const { req_id } = this;
    const data = {
      req_id
    };
    this.myAdminAuthService.acceptStatus(data).subscribe((response: any) => {
      this.ngOnInit();
    });

  }
  RejectedStatus() {
    const { req_id } = this;
    const data = {
      req_id
    };
    this.myAdminAuthService.rejectStatus(data).subscribe((response: any) => {
      this.ngOnInit();
    });
  }
  PendingStatus() {
    const { req_id } = this;
    const data = {
      req_id
    };
    this.myAdminAuthService.pendingStatus(data).subscribe((response: any) => {
      this.ngOnInit();
    });
  }
















}
