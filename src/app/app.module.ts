import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AirlineComponent } from './airline/airline.component';
import { GuestMasterComponent } from "./guest/guestmaster.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { MainRoutingModule } from "./routing/airline.mainroutes";
import { SearchComponent } from './search/searchflight.component';
import { AuthGaurd } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
    declarations: [
      GuestMasterComponent,
      AirlineComponent,
      LoginComponent,
      RegisterComponent,
      SearchComponent
    ],
    imports: [
      BrowserModule,
      MainRoutingModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule
    ],
    providers: [AuthService,AuthGaurd,{
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
    bootstrap: [GuestMasterComponent]
  })
  export class AppModule { }