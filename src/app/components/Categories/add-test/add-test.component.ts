import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  constructor(public myAdminAuthService: AdminAuthService, public myRouter: Router, public myActivatedRoute: ActivatedRoute) { }
  public test_title: any
  public test_period: any
  public test_price: any
  public test_description: any
  public test_questions: any = []
  public cat_id: any

  ngOnInit() {
    this.myActivatedRoute.params.subscribe(params => {
      this.cat_id = params.id
    })
  }
  handleTextInput(event) {
    let text = event.target.value
    let id = event.target.id

    switch (id) {
      case 'title': { this.test_title = text; break; }
      case 'period': { this.test_period = text; break; }
      case 'description': { this.test_description = text; break; }
      case 'price': { this.test_price = text; break; }
      case 'Q1': { this.test_questions[0] = text; break; }
      case 'Q2': { this.test_questions[1] = text; break; }
      case 'Q3': { this.test_questions[2] = text; break; }
    }

  }
  onSubmit() {
    const { cat_id, test_title, test_price, test_period, test_description, test_questions } = this
    const CategoryData = { cat_id, test_title, test_price, test_period, test_description, test_questions };

    this.myAdminAuthService.addTest(CategoryData).subscribe((Response: any) => {
      this.myRouter.navigate([`home/editcategory/${this.cat_id}`])
    })

  }

}
