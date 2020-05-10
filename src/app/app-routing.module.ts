import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./pages/signin/signin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ErrorComponent } from "./pages/error/error.component";
import { PatientsComponentComponent } from "./components/patients-component/patients-component.component";
import { RequestsComponent } from "./components/requests/list-requests/requests.component";
import { HospitalComponent } from "./components/hospital/hospital-view/hospital.component";
import { MedicinesComponent } from "./components/Medicines/list-medicine/medicines.component";
import { AddMedicineComponent } from "./components/Medicines/add-medicine/add-medicine.component";
import { EditMedicineComponent } from "./components/Medicines/edit-medicine/edit-medicine.component";
import { MedicalCategoriesComponent } from './components/Categories/list-category/medical-categories.component';
import { AddCategoryComponent } from './components/Categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/Categories/edit-category/edit-category.component';
import { AddTestComponent } from './components/Categories/add-test/add-test.component';
import { HospitalEditComponent } from './components/hospital/hospital-edit/hospital-edit.component';
import { TestComponent } from './components/test/test.component';
import { ResultsComponent } from './components/results/results.component';
import { AcceptedRequestComponent } from './components/requests/accepted-request/accepted-request.component';


const routes: Routes = [
  {
    path: "",
    component: SigninComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "home",
    component: DashboardComponent,
    children: [
      { path: "patients", component: PatientsComponentComponent },
      { path: "requests", component: RequestsComponent },
      { path: "hospital", component: HospitalComponent },
      {
        path: "Medicines",
        component: MedicinesComponent
      },
      { path: "addmedicine", component: AddMedicineComponent },
      { path: "editmedicine/:id", component: EditMedicineComponent },
      { path: "category", component: MedicalCategoriesComponent },
      { path: "addcategory", component: AddCategoryComponent },
      { path: "editcategory/:id", component: EditCategoryComponent },
      { path: "addtest/:id", component: AddTestComponent },
      { path: "edithospital", component: HospitalEditComponent },
      { path: "test", component: TestComponent },
      { path: "results", component: ResultsComponent },
      { path: "acceptreq", component: AcceptedRequestComponent }


    ]
  },

  {
    path: "error",
    component: ErrorComponent
  },
  { path: "**", redirectTo: "error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
