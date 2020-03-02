import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SigninComponent } from './pages/signin/signin.component';

import { ErrorComponent } from './pages/error/error.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientsComponentComponent } from './components/patients-component/patients-component.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RequestsComponent } from './components/requests/requests.component';
import { HospitalComponent } from './components/hospital/hospital.component';

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
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
