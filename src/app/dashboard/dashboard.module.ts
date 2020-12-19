import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { RouterModule,Routes } from '@angular/router';
import {MaterialmoduleModule} from '../materialmodule/materialmodule.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { PaymentComponent } from './payment/payment.component';

import { SharedService } from '../dashboard/shared/shared.service'
const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[
    {path: 'header',component:HeaderComponent },
    {path: 'home',component:HomeComponent },
    {path:'appointment-list',component:AppointmentListComponent},
    {path:'create',component:CreateAppointmentComponent},
    {path:'login',component:LoginComponent},
    {path:'booking',component:BookingSummaryComponent},
    {path:'payment',component:PaymentComponent}
  ]
},
 
  
]
@NgModule({
  declarations: [DashboardComponent, HeaderComponent, HomeComponent, AppointmentListComponent, CreateAppointmentComponent,  LoginComponent, BookingSummaryComponent, PaymentComponent],
  imports: [
    CommonModule,
    MaterialmoduleModule,
    FormsModule, ReactiveFormsModule ,
    [RouterModule.forChild(routes)],
   
  ],
  providers:[SharedService],
  entryComponents:[]
})
export class DashboardModule { }
