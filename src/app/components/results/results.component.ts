import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public myAdminAuthService: AdminAuthService) { }
  Results: any
  ngOnInit() {
    this.getResults();
  }
  getResults() {
    this.myAdminAuthService.getResults().subscribe((resp: any) => {
      this.Results = resp;
      console.log(resp);
    })
  }

}
