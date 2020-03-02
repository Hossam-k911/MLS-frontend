import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../services/admin-auth.service'
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospitalData: any
  constructor(public myAdminAuthService: AdminAuthService) { }

  ngOnInit() {

    this.myAdminAuthService.getHospitalInfo().subscribe((response: any) => {
      this.hospitalData = response;
    })
  }

}
