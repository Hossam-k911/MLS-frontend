import { Component, OnInit } from "@angular/core";
import { AdminAuthService } from "../../../services/admin-auth.service";

@Component({
  selector: "app-medicines",
  templateUrl: "./medicines.component.html",
  styleUrls: ["./medicines.component.css"]
})
export class MedicinesComponent implements OnInit {
  medicinesData: any;
  m_id: any;
  constructor(public myAdminAuthService: AdminAuthService) {}

  ngOnInit() {
    this.getMedicines();
  }
  //getMedicines
  getMedicines() {
    this.myAdminAuthService.getMediciensinfo().subscribe((Response: any) => {
      this.medicinesData = Response;
    });
  }
  matchId(id) {
    this.m_id = id;
    console.log(this.m_id);
    console.log(id);
  }
  //delete medicine
  deleteMedicine() {
    // this.m_id = data
    const { m_id } = this;
    const reqData = { m_id };

    this.myAdminAuthService.deleteMedicine(reqData).subscribe(
      (Response: any) => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }
}
