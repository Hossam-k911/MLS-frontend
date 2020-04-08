import { Component, OnInit } from "@angular/core";
import { AdminAuthService } from "../../services/admin-auth.service";

@Component({
  selector: "app-medicines",
  templateUrl: "./medicines.component.html",
  styleUrls: ["./medicines.component.css"]
})
export class MedicinesComponent implements OnInit {
  medicinesData: any;
  m_id: any;
  constructor(public myAdminAuthService: AdminAuthService) { }

  ngOnInit() {
    this.getMedicines();
  }
  //getMedicines
  getMedicines() {
    this.myAdminAuthService.getMediciensinfo().subscribe((Response: any) => {
      this.medicinesData = Response;
    });

  }
  //delete medicine
  deleteMedicine(data) {
    this.m_id = data
    const { m_id } = this
    const reqData = { m_id };
    // console.log(m_id)
    this.myAdminAuthService.deleteMedicine(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.ngOnInit()
    },
      err => {

        console.log(err);
        // console.log('Error response');
      }


    )

  }
}
