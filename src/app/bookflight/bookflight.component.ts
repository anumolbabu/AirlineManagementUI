import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { BookingDetails } from "../models/bookingdetails";
import { FlightDetails } from "../models/flightdetails";
import { LoginData } from "../models/logindata";
import { PassengerData } from "../models/passengerdetails";
import { DataMappingService } from "../services/data.service";

@Component({
    //selector: 'app-manage-airlines',
    templateUrl: './bookflight.component.html'
  })

 export class BookflightComponent implements OnInit{
    selectedflightDetails: FlightDetails=new FlightDetails();

    @ViewChild('SearchComponent', {static : false}) datamapper: any;
    flightRecord:FlightDetails=new FlightDetails();
    dynamicArray : Array<PassengerData>=new Array<PassengerData>();
    bookingDetails: BookingDetails=new BookingDetails();
    userDetails: LoginData=new LoginData();

    private _bookflightUrl = "http://localhost:16192/api/v1.0/airlinegateway/search/bookflight";
  

    constructor(private http: HttpClient, private _router: Router,public _dataMappingService:DataMappingService) { }
    
    
    ngOnInit(): void {
    this.flightRecord=this._dataMappingService.data;
    //console.log(this.flightRecord);    
    this.dynamicArray.push({ PassengerName: '', PassengerGender: '', PassengerAge:Number(18)});
 
    }

      addRow() {
        this.dynamicArray.push({ PassengerName: '', PassengerGender: '', PassengerAge:Number(18)});
        console.log('New row added successfully', 'New Row');
      }
      deleteRow(index:any) {
        if (this.dynamicArray.length > 1)
        this.dynamicArray.splice(index, 1);
      }
      flightBook() {
        this.dynamicArray.forEach((x)=>{ x.PassengerAge=Number(x.PassengerAge) });   
        //var pnrNumber=this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss')?.replace('/','').replace(':','').replace('/','').replace(':','').replace(' ','');
        this.bookingDetails.FlightNumber=this.flightRecord.flightNumber;
        this.bookingDetails.scheduleId= this.flightRecord.scheduleId;
        this.bookingDetails.Source=this.flightRecord.fromPlace;
        this.bookingDetails.Destination=this.flightRecord.toPlace;
        this.bookingDetails.UserId= localStorage.getItem('UserId')!;
        this.bookingDetails.TotalSeat=this.dynamicArray.length;
        this.bookingDetails.PassengerLists=this.dynamicArray;
        console.log(this.bookingDetails);

        var bookingRequestData={
          ScheduleId:this.bookingDetails.scheduleId,
          UserId:parseInt(this.bookingDetails.UserId),
          TotalSeat:this.bookingDetails.TotalSeat,
          Ticketprice:this.flightRecord.ticketCost,
          Passengers:this.bookingDetails.PassengerLists,
        }
        this.SendBookingRequest(bookingRequestData).subscribe(res=>this.SuccessBook(res),res=>this.ErrorBook(res));;
      }
     
      SuccessBook(res:any){    
        debugger;
        console.log(res); 
        this._dataMappingService.BookedData=res;
        this._router.navigate(['/bookedTicket']);   
      }
      ErrorBook(res:any){
        console.log(res);   
         
      }
  
      SendBookingRequest(input:any){
          return this.http.post<any>(this._bookflightUrl, input)
      }
 }