import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { LoginData } from '../models/logindata';
import { RegisterData } from '../models/registerdata';
import { AirlineData } from '../models/airlinedata';
import { AirlineModel } from '../models/airlinemodel';

@Injectable()
export class AuthService {
    private _registerUrl = "http://localhost:16192/api/v1.0/airlinegateway/registration/register";
    private _loginUrl = "http://localhost:16192/api/v1.0/airlinegateway/login"
   
    constructor(private http: HttpClient, private _router: Router) {

    }

    loginUser(user: LoginData) {
        return this.http.post<any>(this._loginUrl, user)
    }

    registerUser(user: RegisterData) {
        console.log(user);
        return this.http.post<any>(this._registerUrl, user)
    }

    logoutUser() {
    
        localStorage.removeItem('UserId')
        localStorage.removeItem('UserName')
        localStorage.removeItem('Role')
        localStorage.removeItem('RefreshToken')
        
        localStorage.removeItem('Token')
        this._router.navigate(['/login'])
    }

    getToken() {
        return localStorage.getItem('Token')
    }
    loggedIn() {
        return !!localStorage.getItem('Token')
    }
    isAdmin() {
        if (!!localStorage.getItem('Token') && localStorage.getItem('Role') == "1")
            return true;
        else
            return false;
    }

    isUser() {
        if (!!localStorage.getItem('Token') && localStorage.getItem('Role') == "2")
            return true;
        else
            return false;
    }
}