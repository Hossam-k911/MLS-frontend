import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminAuthService } from "src/app/services/admin-auth.service";

@Component({
  selector: "app-edit-medicine",
  templateUrl: "./edit-medicine.component.html",
  styleUrls: ["./edit-medicine.component.css"]
})
export class EditMedicineComponent implements OnInit {
  m_id: any;
  medicineInfo: any = {};
<<<<<<< HEAD:src/app/components/edit-medicine/edit-medicine.component.ts
  public medicine_Name: any;
  public medicine_Description: any;
  public medicine_Quantity: any;
  public medicine_Price: any;
  public medicine_ImageUrl: any;
  public medicine_Unit: any;

=======
  public medicine_Name: any
  public medicine_Description: any
  public medicine_Quantity: any
  public medicine_Price: any
  public medicine_ImageUrl: any
  public medicine_Unit: any
>>>>>>> 00b0c1629831c5068ed643e9f80cb3c5903f924f:src/app/components/Medicines/edit-medicine/edit-medicine.component.ts
  constructor(
    public myActivatedRoute: ActivatedRoute,
    public myRouter: Router,
    public myFormBuilder: FormBuilder,
    public myAdminAuthService: AdminAuthService
  ) {}

  ngOnInit() {
    this.myActivatedRoute.params.subscribe(params => {
      this.m_id = params.id;
      this.myAdminAuthService
        .getMedicine(params.id)
        .subscribe((Response: any) => {
          this.medicineInfo = Response;
        });
    });
  }

  handleTextInput(event) {
    let text = event.target.value;
    let id = event.target.id;

    switch (id) {
<<<<<<< HEAD:src/app/components/edit-medicine/edit-medicine.component.ts
      case "name": {
        this.medicine_Name = text;
        break;
      }
      case "description": {
        this.medicine_Description = text;
        break;
      }
      case "quantity": {
        this.medicine_Quantity = text;
        break;
      }
      case "price": {
        this.medicine_Price = text;
        break;
      }
      case "imageURL": {
        this.medicine_ImageUrl = text;
        break;
      }
      case "unit": {
        this.medicine_Unit = text;
        break;
      }
=======
      case 'name': { this.medicine_Name = text; break; }
      case 'description': { this.medicine_Description = text; break; }
      case 'quantity': { this.medicine_Quantity = text; break; }
      case 'price': { this.medicine_Price = text; break; }
      case 'imageURL': { this.medicine_ImageUrl = text; break; }
      case 'unit': { this.medicine_Unit = text; break; }

>>>>>>> 00b0c1629831c5068ed643e9f80cb3c5903f924f:src/app/components/Medicines/edit-medicine/edit-medicine.component.ts
    }
    console.log(event);
  }

  onSubmit() {
<<<<<<< HEAD:src/app/components/edit-medicine/edit-medicine.component.ts
    const {
      medicine_Name,
      medicine_Description,
      medicine_Quantity,
      medicine_Price,
      medicine_ImageUrl,
      medicine_Unit
    } = this;
    const medicineData = {
      medicine_Name,
      medicine_Description,
      medicine_Quantity,
      medicine_Price,
      medicine_ImageUrl,
      medicine_Unit
    };

    this.myAdminAuthService
      .editMedicine(medicineData, this.m_id)
      .subscribe((Response: any) => {
        this.myRouter.navigate(["home/Medicines"]);
      });
=======
    const { medicine_Name, medicine_Description, medicine_Quantity, medicine_Price, medicine_ImageUrl, medicine_Unit } = this
    const medicineData = { medicine_Name, medicine_Description, medicine_Quantity, medicine_Price, medicine_ImageUrl, medicine_Unit };

    this.myAdminAuthService.editMedicine(medicineData, this.m_id).subscribe((Response: any) => {
      this.myRouter.navigate(['home/Medicines'])
    })

>>>>>>> 00b0c1629831c5068ed643e9f80cb3c5903f924f:src/app/components/Medicines/edit-medicine/edit-medicine.component.ts
  }
}
