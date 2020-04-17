import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(public myAdminAuthService: AdminAuthService, public myRouter: Router) { }
  public category_title: any
  public category_imgLink: any
  ngOnInit() {
  }
  handleTextInput(event) {
    let text = event.target.value
    let id = event.target.id

    switch (id) {
      case 'title': { this.category_title = text; break; }
      case 'url': { this.category_imgLink = text; break; }

    }

  }


  onSubmit() {
    const { category_title, category_imgLink } = this
    const CategoryData = { category_title, category_imgLink };

    this.myAdminAuthService.addCategory(CategoryData).subscribe((Response: any) => {
      this.myRouter.navigate(['home/category'])
    })

  }


}
