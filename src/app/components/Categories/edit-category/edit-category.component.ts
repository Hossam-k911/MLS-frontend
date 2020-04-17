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
  constructor(public myAdminAuthService: AdminAuthService, public myActivatedRoute: ActivatedRoute,
    public myRouter: Router) { }

  ngOnInit() {
    this.myActivatedRoute.params.subscribe(params => {
      this.cat_id = params.id
      this.myAdminAuthService.getCategory(params.id).subscribe((Response: any) => {
        this.MedicalTest = Response;
        console.log(Response)
      })
    })
  }

  matchId(id) {
    this.t_id = id;
  }

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

}
