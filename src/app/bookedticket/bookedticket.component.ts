import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { BookedFlightData } from "../models/bookingresponsedata";
import { DataMappingService } from "../services/data.service";

@Component({
    //selector: 'app-manage-airlines',
    templateUrl: './bookedticket.component.html'
  })

 export class BookedTicketComponent implements OnInit{

    @ViewChild('BookflightComponent', {static : false}) datamapper: any;
     bookedFlightData:BookedFlightData=new BookedFlightData();

     constructor(private http: HttpClient, private _router: Router,public _dataMappingService:DataMappingService) { }
    

    ngOnInit(): void {
        this.bookedFlightData=this._dataMappingService.BookedData;
        console.log(this.bookedFlightData); 
    }
     
 }
