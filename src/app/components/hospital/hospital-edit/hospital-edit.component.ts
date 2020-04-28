import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-hospital-edit',
  templateUrl: './hospital-edit.component.html',
  styleUrls: ['./hospital-edit.component.css']
})
export class HospitalEditComponent implements OnInit {

  constructor(public myRouter: Router, public myAdminAuthService: AdminAuthService, public myActivatedRoute: ActivatedRoute) { }
  hos_id: any
  hospitalData: any


  public hospital_name: any
  public hospital_phone: any
  public hospital_website: any
  public hospital_location: any
  public hospital_itManager: any
  public hospital_generalManager: any
  public hospital_facebook: any
  public hospital_email: any
  public hospital_adminstratonManager: any
  public hospital_PurchasingManager: any
  public hospital_MarketingManager: any




  ngOnInit() {
    this.myAdminAuthService.getHospital().subscribe((Response: any) => {
      this.hospitalData = Response;
      this.hos_id = Response._id;
    })

  }

  handleTextInput(event) {
    let text = event.target.value
    let id = event.target.id

    switch (id) {
      case 'name': { this.hospital_name = text; break; }
      case 'phone': { this.hospital_phone = text; break; }
      case 'email': { this.hospital_email = text; break; }
      case 'website': { this.hospital_website = text; break; }
      case 'location': { this.hospital_location = text; break; }
      case 'it': { this.hospital_itManager = text; break; }
      case 'fb': { this.hospital_facebook = text; break; }
      case 'gm': { this.hospital_generalManager = text; break; }
      case 'am': { this.hospital_adminstratonManager = text; break; }
      case 'pm': { this.hospital_PurchasingManager = text; break; }
      case 'mm': { this.hospital_MarketingManager = text; break; }

    }

  }

  onSubmit() {
    const { hos_id, hospital_name, hospital_phone, hospital_website, hospital_email,
      hospital_MarketingManager, hospital_facebook, hospital_PurchasingManager,
      hospital_adminstratonManager, hospital_generalManager,
      hospital_itManager, hospital_location } = this
    const hospitalData = {
      hos_id,
      hospital_name, hospital_phone, hospital_website, hospital_email,
      hospital_MarketingManager, hospital_facebook, hospital_PurchasingManager,
      hospital_adminstratonManager, hospital_generalManager,
      hospital_itManager, hospital_location
    };

    this.myAdminAuthService.editHospital(hospitalData).subscribe((Response: any) => {
      this.myRouter.navigate(['home/hospital'])
    })

  }

}
