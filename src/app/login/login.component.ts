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
      localStorage.setItem('UserId', res.UserId)
      localStorage.setItem('UserName', res.UserName)
      localStorage.setItem('Role', res.Role)
      localStorage.setItem('Token', res.Token)
      localStorage.setItem('RefreshToken', res.RefreshToken)
      if (localStorage.getItem('Role') == "1")
      this._router.navigate(['/home'])
      else if (localStorage.getItem('Role') == "2")
        this._router.navigate(['/search'])  
    },
      err => console.log(err));
  }


}
