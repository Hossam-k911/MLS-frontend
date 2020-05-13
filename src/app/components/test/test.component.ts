import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tests: any
  constructor(public myAdminAuthService: AdminAuthService) { }

  ngOnInit() {
    this.getFiles();
  }
  getFiles() {
    this.myAdminAuthService.getResultsFiles().subscribe((res) => {
      this.tests = res;
      console.log(res);
    })
  }



}
