import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../models/logindata';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginUserData: LoginData = new LoginData();
  constructor(private _auth: AuthService, private _router: Router) { }
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(res => {
      localStorage.setItem('token', res.token)
      //this._router.navigate(['/special'])
    },
      err => console.log(err));
  }


}
