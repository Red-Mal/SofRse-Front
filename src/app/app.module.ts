import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RseideaformComponent } from './components/rseideaform/rseideaform.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import {TableModule} from 'primeng/table';
import {MultiSelectModule} from "primeng/multiselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogModule} from "primeng/dialog";
import {SliderModule} from "primeng/slider";
import {CalendarModule} from "primeng/calendar";
import {ContextMenuModule} from "primeng/contextmenu";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {ProgressBarModule} from "primeng/progressbar";
import { ListRseideaComponent } from './components/list-rseidea/list-rseidea.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RseideaformComponent,
    HeaderComponent,
    NavigationComponent,
    ListRseideaComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
