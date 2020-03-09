import { Component, OnInit, Input } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: any
  // time: String = ''
  // userId: any
  constructor(public myAdminAuthService: AdminAuthService) { }

  @Input() reqDetails: IreqDetails = {
    name: '',
    phone: '',
    time: '',
    date: '',
    test: ''

  }
  ngOnInit() {

    this.myAdminAuthService.getRequests().subscribe((response: any) => {
      this.requests = response;

    })



  }

  handleProfileNavigation() {
    this.myAdminAuthService.selectedRequest = this.reqDetails
    // this.MyRouter.navigate(['/countries/profile', this.countryDetails],{skipLocationChange:true})
    // this.MyRouter.navigate(['/countries/profile'])
  }

}





interface IreqDetails {
  name: string;
  phone: string;
  time: string;
  date: string;
  test: string;
}
