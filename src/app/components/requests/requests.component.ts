import { Component, OnInit, Input } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: any = [];
  Request: any = {};
  index: number;
  constructor(public myAdminAuthService: AdminAuthService) { }


  ngOnInit() {

    this.myAdminAuthService.getRequests().subscribe((response: any) => {
      this.requests = response;
      this.index = this.requests.length
      // this.name = response.req_p_name;
    })

  }

  handleProfileNavigation(row) {
    this.Request = row;

  }

}





// interface IreqDetails {
//   // req_p_name: string;
//   req_time: string;
//   req_date: string;
//   req_test: string;
//   req_status: string;
// }
