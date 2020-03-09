import { Component, OnInit, Input } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: any
  selectedRequest: any = {}
  req_status: any = ''
  accepted_status: string = 'Accepted';
  rejected_status: string = 'Rejected';

  req_id: any = ''

  getcurrentUser(user): void {
    this.selectedRequest = user;
    this.req_id = user._id;


  }
  constructor(public myAdminAuthService: AdminAuthService) { }


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
}


