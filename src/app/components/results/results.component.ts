import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public myAdminAuthService: AdminAuthService) { }
  AcceptedRequests: any = []
  newarr: any = []

  ngOnInit() {
    this.getAccteptedRequests();
    this.displayingAcceptedRequests();
  }


  getAccteptedRequests() {
    this.myAdminAuthService.getAccepted().subscribe((r: any) => {
      this.AcceptedRequests = r;
      console.log("old arr", r);
    })

  }
  displayingAcceptedRequests() {
    for (let i = 0; i < this.AcceptedRequests.length; i++) {
      if (this.AcceptedRequests[i].result_file_id === "NULL") {
        this.newarr = this.AcceptedRequests[i]
      }
      console.log("new arr", this.newarr);
    }
  }
}
