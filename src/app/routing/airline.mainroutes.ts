import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AirlineComponent } from "../airline/airline.component";
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
    }

  
];

@NgModule({
    imports: [RouterModule.forRoot(MainRoutes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }