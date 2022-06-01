import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FlightDetails } from "../models/flightdetails";
import { SearchRequestData } from "../models/searchrequestdata";
import { DataMappingService } from "../services/data.service";

@Component({
    templateUrl: './searchflight.component.html'
  })
export class SearchComponent {

  searchRequestData: SearchRequestData = new SearchRequestData();
 // BookingrequestData: FlightDetails = new FlightDetails();
  searchResponseData: Array<FlightDetails> = new Array<FlightDetails>();

  private _searchflightUrl = "http://localhost:16192/api/v1.0/airlinegateway/search/searchflights";
 
  constructor(private http: HttpClient, private _router: Router,public dataMappingService:DataMappingService) { }

  

  searchFlight() {
    debugger;
  
    this.http.post<any>(this._searchflightUrl, this.searchRequestData).subscribe(res => { this.SuccessSearch(res) }, err => {this.ErrorSearch(err)});

  }
    SuccessSearch(res: any) {
      debugger;
      console.log(res);
      this.searchResponseData=res;
      // this.SuccessMessage='Airline details added successfully!!!';
      // this.AlertMessage='';
      
    }
    ErrorSearch(err: any) {
      debugger;
      console.log(err);
      // this.AlertMessage='Unable to Add Airline details!!!';
      // this.SuccessMessage='';
    }
    
   
    BookFlight(input:FlightDetails) {
      debugger;
      this.dataMappingService.data=input;
      this._router.navigate(['/bookflight']); 
      //this.sendRequest(this.BookingrequestData)
     // this.http.post<any>(this._searchflightUrl, input).subscribe(res => { this.SuccessSearch(res) }, err => {this.ErrorSearch(err)});
  
    }
    
  
}