import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  {
    path: "", component: SigninComponent
  },
  {
    path: "signin", component: SigninComponent
  },
  {
    path: "home", component: DashboardComponent

  },
  {
    path: "error", component: ErrorComponent
  },
  { path: "**", redirectTo: "error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
