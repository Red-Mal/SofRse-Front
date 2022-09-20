import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RseideaformComponent} from "./components/rseideaform/rseideaform.component";
import {ListRseideaComponent} from "./components/list-rseidea/list-rseidea.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {NavigationComponent} from "./components/navigation/navigation.component";


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
  ,
  {
    path:"rseideas",
    component:ListRseideaComponent
  }
  ,
  {
    path:"sidebar",
    component:SidebarComponent
  }
  ,
  {
    path:"navigation",
    component:NavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
