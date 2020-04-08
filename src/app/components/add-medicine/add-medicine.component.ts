import { Component, OnInit } from "@angular/core";
import { AdminAuthService } from '../../services/admin-auth.service'
import { Router } from '@angular/router';

@Component({
  selector: "app-add-medicine",
  templateUrl: "./add-medicine.component.html",
  styleUrls: ["./add-medicine.component.css"]
})
export class AddMedicineComponent implements OnInit {

  constructor(public myAdminAuthService: AdminAuthService, public myRouter: Router) { }
  public medicine_Name: any
  public medicine_Description: any
  public medicine_Quantity: any
  public medicine_Price: any
  ngOnInit() {

  }

  handleTextInput(event) {
    let text = event.target.value
    let id = event.target.id

    switch (id) {
      case 'name': { this.medicine_Name = text; break; }
      case 'description': { this.medicine_Description = text; break; }
      case 'quantity': { this.medicine_Quantity = text; break; }
      case 'price': { this.medicine_Price = text; break; }

    }
    console.log(event);
  }

  onSubmit() {
    const { medicine_Name, medicine_Description, medicine_Quantity, medicine_Price } = this
    const medicineData = { medicine_Name, medicine_Description, medicine_Quantity, medicine_Price };

    this.myAdminAuthService.addMedicine(medicineData).subscribe((Response: any) => {
      this.myRouter.navigate(['home/Medicines'])
    })

  }





}
