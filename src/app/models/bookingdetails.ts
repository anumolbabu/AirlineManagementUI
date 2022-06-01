import { PassengerData } from "./passengerdetails";

export class BookingDetails{  
    scheduleId:number=0; 
    FlightNumber: Number=0;
    Source: string="";
    Destination:string="";
    UserId: string="";
    TotalSeat:Number=0;
    PassengerLists:  Array<PassengerData>=new Array<PassengerData>();
    
}