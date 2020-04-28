import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../../services/admin-auth.service'
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospitalData: any
  hos_id: any
  constructor(public myAdminAuthService: AdminAuthService) { }

  ngOnInit() {

    this.myAdminAuthService.getHospitalInfo().subscribe((response: any) => {
      this.hospitalData = response;
      console.log(response);
      // this.sendHospitalId(response._id)
    })
  }
  sendHospitalId(id) {
    this.hos_id = id
    console.log(this.hos_id);
  }

}
