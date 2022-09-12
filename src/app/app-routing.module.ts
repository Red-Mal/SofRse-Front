import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RseideaformComponent} from "./components/rseideaform/rseideaform.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"rseidea",
    component:RseideaformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
