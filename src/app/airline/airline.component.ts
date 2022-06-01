import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AirlineData } from "../models/airlinedata";
import { AirlineModel } from '../models/airlinemodel';

@Component({
    //selector: 'app-manage-airlines',
    templateUrl: './airline.component.html'
  })

 export class AirlineComponent implements OnInit{

    airlineData: AirlineData = new AirlineData();
    airlineModel: AirlineModel=new AirlineModel();
    
    allAirlines: Array<AirlineData> = new Array<AirlineData>();

        
    AlertMessage:string='';
    SuccessMessage:string='';
    private _addAirlineUrl = "http://localhost:16192/api/v1.0/airlinegateway/airLine/addairline";
    private _getAirlinesUrl = "http://localhost:16192/api/v1.0/airlinegateway/airLine/getairlines";
    private _editAirlinesUrl = "http://localhost:16192/api/v1.0/airlinegateway/airLine/editairline";
    

    constructor(private http: HttpClient, private _router: Router) {
      this.GetAirlines()
     }

    ngOnInit(): void {
      
    }

    addAirline() {
      this.airlineModel.AirlineName=this.airlineData.airlineName;
      this.airlineModel.ContactAddress=this.airlineData.contactAddress;
      this.airlineModel.ContactNumber=parseInt(this.airlineData.contactNumber);

      this.sendRequest(this.airlineModel).subscribe(res => { this.SuccessAdd(res) }, err => {this.ErrorAdd(err)});
  
    }
      SuccessAdd(res: any) {
        console.log(res);
        this.SuccessMessage='Airline details added successfully!!!';
        this.AlertMessage='';
        
      }
      ErrorAdd(err: any) {
        console.log(err);
        this.AlertMessage='Unable to Add Airline details!!!';
        this.SuccessMessage='';
      }
      
      sendRequest(airline: AirlineModel) {
        return this.http.post<any>(this._addAirlineUrl, airline)
      }
    
      
  GetAirlines(){
    this.http.get<any>(this._getAirlinesUrl).subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res))
  }
    SuccessGet(res:any){
      if(res!= null)
      {
        this.allAirlines=res;
        console.log("allAirlines");
        console.log(this.allAirlines);
      }
      else{
        console.log("response");
        console.log(res);
      }
    }
    ErrorGet(res:any){
      console.log(res);
    }

    EditAirlines(input:AirlineData){
      this.http.post<any>(this._editAirlinesUrl,input).subscribe(res=>this.SuccessEdit(res),res=>this.ErrorEdit(res))
    }
      SuccessEdit(res:any){
        if(res!= null)
        {
          this.allAirlines=res;
          console.log("allAirlines");
          console.log(this.allAirlines);
        }
        else{
          console.log("response");
          console.log(res);
        }
      }
      ErrorEdit(res:any){
        console.log(res);
      }


      DeleteAirlines(input:number){
        // let httpParms=new HttpParams().set("Id",input)
        // let options={params:httpParms};
        this.http.delete<any>("http://localhost:16192/api/v1.0/airlinegateway/airLine/delete/"+input+"").subscribe(res=>this.SuccessDelete(res),res=>this.ErrorDelete(res))
      }
        SuccessDelete(res:any){
          if(res!= null)
          {
            this.allAirlines=res;
            console.log("allAirlines");
            console.log(this.allAirlines);
          }
          else{
            console.log("response");
            console.log(res);
          }
        }
        ErrorDelete(res:any){
          console.log(res);
        }

    }