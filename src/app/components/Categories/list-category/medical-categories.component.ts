import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-medical-categories',
  templateUrl: './medical-categories.component.html',
  styleUrls: ['./medical-categories.component.css']
})
export class MedicalCategoriesComponent implements OnInit {


  category: any
  cat_id: any
  constructor(public myAdminAuthService: AdminAuthService) { }

  ngOnInit() {
    this.listCategories();

  }
  listCategories() {
    this.myAdminAuthService.listCategories().subscribe((Response: any) => {
      this.category = Response;

    })
  }

  matchId(id) {
    this.cat_id = id;
  }
  deleteCategory() {
    // this.m_id = data
    const { cat_id } = this
    const reqData = { cat_id };
    this.myAdminAuthService.deleteCategory(reqData).subscribe((Response: any) => {
      this.ngOnInit()
    },
      err => { console.log(err); }
    )
  }





}
