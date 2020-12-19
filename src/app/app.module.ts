import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialmoduleModule} from '../app/materialmodule/materialmodule.module'
import { SharedService } from './dashboard/shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmoduleModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
