import { Component, OnInit } from '@angular/core';
// import {ToastrService} from 'ngx-toastr'
import { HeaderComponent } from '../../components/header/header.component'
import { SideBarComponent } from '../../components/side-bar/side-bar.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(/*private toastr:ToastrService*/) { }
  show = false;
  autohide = true;
  ngOnInit() {
  }
  // showSuccess(){
  //   this.toastr.success('Hello world!','Toastr Fun ! ');
  // }

}
