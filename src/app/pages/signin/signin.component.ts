import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AdminAuthService } from '../../services/admin-auth.service'
import { HttpResponse } from '@angular/common/http'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public email = ''
  public password = ''
  public token = ''

  constructor(public myAdminAuthService: AdminAuthService, public myRouter: Router) { }

  ngOnInit() {
  }

  handleTextInput(event) {
    let text = event.target.value
    let id = event.target.id

    switch (id) {
      case 'email': { this.email = text; break; }
      case 'password': { this.password = text; break; }

    }
  }

  handleSignIn() {
    const { email, password } = this
    if (!email || !password) {
      alert('please enter Your Value ')
    } else {
      const data = {
        email, password
      }
      this.myAdminAuthService.userSignIn(data).subscribe((response: any) => {
        localStorage.setItem('x-auth-token', response.token)
        this.token = response.token;
        this.myAdminAuthService.loggedIn = true
        this.myRouter.navigate(['home'])
        // console.log(this.token);
      })
    }


  }

}
