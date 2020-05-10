import { Component, OnInit } from "@angular/core";
import { AdminAuthService } from "src/app/services/admin-auth.service";

@Component({
  selector: "app-accepted-request",
  templateUrl: "./accepted-request.component.html",
  styleUrls: ["./accepted-request.component.css"]
})
export class AcceptedRequestComponent implements OnInit {
  AcceptedRequests: any;
  constructor(public myAdminAuthService: AdminAuthService) {}

  ngOnInit() {
    this.getAccepted();
  }
  getAccepted() {
    this.myAdminAuthService.getAcceptedRequests().subscribe((resp: any) => {
      this.AcceptedRequests = resp;
      console.log(resp);
    });
  }
}
