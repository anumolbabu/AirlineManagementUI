import { Injectable } from "@angular/core";
import { BookedFlightData } from "../models/bookingresponsedata";
import { FlightDetails } from "../models/flightdetails";

@Injectable(
  {providedIn: 'root'}
)
export class DataMappingService {
    selectedFlightDetails: FlightDetails=new FlightDetails();
    bookedTicketData:BookedFlightData=new BookedFlightData();
    constructor() { }
  
     get data(): any{
      return this.selectedFlightDetails;
    }
  
    set data(val: any){
      this.selectedFlightDetails = val;
    }
  
    get BookedData(): any{
      return this.bookedTicketData;
    }
    set BookedData(val: any){
      this.bookedTicketData = val;
    }

}


