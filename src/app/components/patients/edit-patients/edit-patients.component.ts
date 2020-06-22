import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-patients',
  templateUrl: './edit-patients.component.html',
  styleUrls: ['./edit-patients.component.css']
})
export class EditPatientsComponent implements OnInit {

  constructor(
    public myAdminAuthService: AdminAuthService,
    public myRouter: Router,
    public myActivatedRoute: ActivatedRoute

  ) { }
  p_id: any
  pateintData: any
  firstName: any
  lastName: any
  email: any
  password: any
  phone: any
  gender: any
  date: any
  location: any
  snn: any

  ngOnInit() {
    this.myActivatedRoute.params.subscribe(params => {
      this.p_id = params.id;
      this.myAdminAuthService
        .getPatientById(params.id)
        .subscribe((Response: any) => {
          this.pateintData = Response;
          console.log(Response);
        });
    });
  }

  handleTextInput(event) {
    let text = event.target.value;
    let id = event.target.id;

    switch (id) {
      case "f_name": {
        this.firstName = text;
        break;
      }
      case "l_name": {
        this.lastName = text;
        break;
      }
      case "email": {
        this.email = text;
        break;
      }
      case "password": {
        this.password = text;
        break;
      }
      case "gender": {
        this.gender = text;
        break;
      }
      case "phone": {
        this.phone = text;
        break;
      }
      case "date": {
        this.date = text;
        break;
      }
      case "snn": {
        this.snn = text;
        break;
      }
      case "location": {
        this.location = text;
        break;
      }
    }





  }

  onSubmit() {
    const {
      date, lastName, location, email, firstName, gender, password, phone, snn
    } = this;
    const medicineData = {
      date, lastName, location, email, firstName, gender, password, phone, snn
    };

    this.myAdminAuthService
      .editPatients(medicineData, this.p_id)
      .subscribe((Response: any) => {
        this.myRouter.navigate(["home/patients"]);
      });
  }


}
