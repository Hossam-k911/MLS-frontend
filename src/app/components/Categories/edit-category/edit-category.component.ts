import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  MedicalTest: any
  cat_id: any
  t_id: any
  categories: any
  param_id: any
  modifiedtext: string;
  constructor(public myAdminAuthService: AdminAuthService, public myActivatedRoute: ActivatedRoute,
    public myRouter: Router) { }

  ngOnInit() {
    this.myActivatedRoute.params.subscribe(params => {
      this.cat_id = params.id
      this.get(params.id);
    })
    this.getcategories();
  }
  get(val: any) {
    this.myAdminAuthService.getCategory(val).subscribe((Response: any) => {
      this.MedicalTest = Response;
      console.log(Response)
    })
  }
  getcategories() {
    this.myAdminAuthService.listCategories().subscribe((resp: any) => {
      this.categories = resp;
    })
  }
  matchId(id) {
    this.t_id = id;
  }
  // paramID(id) {
  //   debugger;
  //   this.param_id = id;
  //   this.myAdminAuthService.getCategory(id).subscribe((resp: any) => { });
  //   this.ngOnInit();
  // }

  deleteTest() {
    // this.m_id = data
    const { cat_id, t_id } = this
    const reqData = { cat_id, t_id };
    this.myAdminAuthService.deleteTest(reqData).subscribe((Response: any) => {
      this.ngOnInit()
    },
      err => { console.log(err); }
    )
  }

  onempSelected(val: any) { this.customfunction(val) }
  customfunction(val: any) {
    this.get(val);
    //  this.ngOnInit();
    this.myRouter.navigate([`home/editcategory/${val}`])
  }


}
