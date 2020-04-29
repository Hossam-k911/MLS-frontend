import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  medicine: any
  constructor(public myAdminAuthService: AdminAuthService) { }

  ngOnInit() {
    this.getMedicines();
  }


  getMedicines() {
    this.myAdminAuthService.getMediciensinfo().subscribe((resp: any) => {
      this.medicine = resp;
      console.log(resp);
    })
  }

}
