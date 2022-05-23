import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { GuestMasterComponent } from "./guest/guestmaster.component";
import { LoginComponent } from "./login/login.component";
import { MainRoutingModule } from "./routing/airline.mainroutes";
import { AuthGaurd } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
    declarations: [
        GuestMasterComponent,
      //EventsComponent,
      LoginComponent,
      //RegisterComponent,
      //SpecialEventsComponent
    ],
    imports: [
      BrowserModule,
      MainRoutingModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [AuthService,AuthGaurd,{
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
    bootstrap: [GuestMasterComponent]
  })
  export class AppModule { }