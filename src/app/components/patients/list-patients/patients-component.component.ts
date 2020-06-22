import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-patients-component',
  templateUrl: './patients-component.component.html',
  styleUrls: ['./patients-component.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any
  p_id: any
  constructor(public myAdminAuthService: AdminAuthService) { }

  ngOnInit() {
    this.myAdminAuthService.getPatients().subscribe((response: any) => {
      this.patients = response;
    })
  }
  matchId(id) {
    this.p_id = id;
    console.log(this.p_id); 5
    // console.log(id);
  }
  //delete medicine
  deletePatient() {
    const { p_id } = this;
    const patientData = { p_id };

    this.myAdminAuthService.deletePatient(patientData).subscribe(
      (Response: any) => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }
}
