import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AirlineComponent } from "../airline/airline.component";
import { BookedTicketComponent } from "../bookedticket/bookedticket.component";
import { BookflightComponent } from "../bookflight/bookflight.component";
import { HomeComponent } from "../Home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { SearchComponent } from "../search/searchflight.component";
import { AuthGaurd } from "../services/auth.guard";

export const MainRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        canActivate:[AuthGaurd],
        component: HomeComponent
    },
    {
        path: 'airline',
        component: AirlineComponent
    },
    {
        path: 'search',
        canActivate:[AuthGaurd],
        component: SearchComponent
    },
    {
        path: 'bookflight',
        canActivate:[AuthGaurd],
        component: BookflightComponent
    },
    {
        path: 'bookedTicket',
        canActivate:[AuthGaurd],
        component: BookedTicketComponent
    }

  
];

@NgModule({
    imports: [RouterModule.forRoot(MainRoutes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }