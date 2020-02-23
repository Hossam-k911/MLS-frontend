import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-patients-component',
  templateUrl: './patients-component.component.html',
  styleUrls: ['./patients-component.component.css']
})
export class PatientsComponentComponent implements OnInit {
  patients: any
  constructor(public myAdminAuthService: AdminAuthService) { }

  ngOnInit() {
    this.myAdminAuthService.getPatients().subscribe((response: any) => {
      this.patients = response;
    })
  }

}
