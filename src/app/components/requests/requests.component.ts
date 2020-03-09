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
  status: any = ''
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
  AcceptedStatus(event) {
    const { req_id } = this
    const data = {
      req_id
    }

  }
  RejectedStatus(event) {

  }


}

