import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './home.component.html'
  })
  export class HomeComponent implements OnInit{
    userName:string='';
  ngOnInit(): void {
    //this.userName=localStorage.getItem('UserName');
    //throw new Error("Method not implemented.");
  }
  

  }
