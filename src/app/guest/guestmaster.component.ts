import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './guestmaster.component.html'
})
export class GuestMasterComponent  {
  title = 'AirLine Management';
 
  constructor(private _authService:AuthService) {
   
  }

  LogOut(){
    this._authService.logoutUser();
  }
  LoggedIn(input:boolean):boolean{
    debugger;
    if(input){
      return this._authService.loggedIn();
    }
    else{
      return !this._authService.loggedIn();
    }
  }
  IsAdmin(input:boolean):boolean{
    debugger;
    if(input){
      return this._authService.isAdmin();
    }
    else{
      return !this._authService.isAdmin();
    }
  }
  IsUser(input:boolean):boolean{
    debugger;
    if(input){
      return this._authService.isUser();
    }
    else{
      return !this._authService.isUser();
    }
  }
  
}
