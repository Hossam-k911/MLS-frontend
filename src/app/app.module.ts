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
import { HospitalComponent } from './components/hospital/hospital-view/hospital.component';
import { MedicinesComponent } from './components/Medicines/list-medicine/medicines.component';
// import { ToastrModule, ToastContainerModule } from 'ngx-toastr'
import { ReactiveFormsModule } from '@angular/forms';
import { AddMedicineComponent } from './components/Medicines/add-medicine/add-medicine.component'
import { EditMedicineComponent } from './components/Medicines/edit-medicine/edit-medicine.component';
import { MedicalCategoriesComponent } from './components/Categories/list-category/medical-categories.component';
import { AddCategoryComponent } from './components/Categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/Categories/edit-category/edit-category.component';
import { AddTestComponent } from './components/Categories/add-test/add-test.component';
import { HospitalEditComponent } from './components/hospital/hospital-edit/hospital-edit.component';

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
    EditMedicineComponent,
    MedicalCategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddTestComponent,
    HospitalEditComponent
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
