import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ErrorComponent } from './pages/error/error.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, FormBuilder } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientsComponentComponent } from './components/patients-component/patients-component.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RequestsComponent } from './components/requests/requests.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { MedicinesComponent } from './components/medicines-list/medicines.component';
// import { ToastrModule, ToastContainerModule } from 'ngx-toastr'
import { ReactiveFormsModule } from '@angular/forms';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component'
import { EditMedicineComponent } from './components/edit-medicine/edit-medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ErrorComponent,
    DashboardComponent,
    PatientsComponentComponent,
    ContentComponent,
    HeaderComponent,
    SideBarComponent,
    RequestsComponent,
    HospitalComponent,
    MedicinesComponent,
    AddMedicineComponent,
    EditMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    // ToastrModule added
    // ToastrModule,
    // ToastContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
