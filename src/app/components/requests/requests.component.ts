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

  getcurrentUser(user): void {
    this.selectedRequest = user;

  }
  constructor(public myAdminAuthService: AdminAuthService) { }


  ngOnInit() {

    this.myAdminAuthService.getRequests().subscribe((response: any) => {
      this.requests = response;

      // this.name = response.req_p_name;
    })

  }


}





// interface IreqDetails {
//   // req_p_name: string;
//   req_time: string;
//   req_date: string;
//   req_test: string;
//   req_status: string;
// }
