import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public myAdminAuthService: AdminAuthService) { }
  public cat_id: any
  ngOnInit() {
    this.myAdminAuthService.listCategories().subscribe((response: any) => {
      this.cat_id = response[0]._id
      // console.log(this.cat_id)
    })
  }

}
