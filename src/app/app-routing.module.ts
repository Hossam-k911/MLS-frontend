import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./pages/signin/signin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ErrorComponent } from "./pages/error/error.component";
import { PatientsComponentComponent } from "./components/patients-component/patients-component.component";
import { RequestsComponent } from "./components/requests/requests.component";
import { HospitalComponent } from "./components/hospital/hospital.component";
import { MedicinesComponent } from "./components/medicines/medicines.component";

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
      { path: "Medicines", component: MedicinesComponent }
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
export class AppRoutingModule {}
