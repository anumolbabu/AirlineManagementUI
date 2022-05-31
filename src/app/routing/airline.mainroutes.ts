import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../Home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { SearchComponent } from "../search/searchflight.component";

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
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }

  
];

@NgModule({
    imports: [RouterModule.forRoot(MainRoutes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }