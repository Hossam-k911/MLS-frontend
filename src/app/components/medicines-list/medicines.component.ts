import { Component, OnInit } from "@angular/core";
import { AdminAuthService } from "../../services/admin-auth.service";

@Component({
  selector: "app-medicines",
  templateUrl: "./medicines.component.html",
  styleUrls: ["./medicines.component.css"]
})
export class MedicinesComponent implements OnInit {
  medicinesData: any;
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
    debugger;
    this.myAdminAuthService.deleteMedicine(data).subscribe((Response: any) => {
      console.log(Response);
    },
      err => {
        console.log(err);
      }


    )

  }
}
