import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";

export const MainRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
  
];

@NgModule({
    imports: [RouterModule.forRoot(MainRoutes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }