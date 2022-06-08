import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AddHairdresserComponent } from './hairdresser/add-hairdresser/add-hairdresser.component';
import { HairdresserItemComponent } from './hairdresser/hairdresser-item/hairdresser-item.component';
import { HairdresserListComponent } from './hairdresser/hairdresser-list/hairdresser-list.component';
import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    NavBarComponent,
    HomeComponent,
    AddHairdresserComponent,
    HairdresserItemComponent,
    HairdresserListComponent,
    AddAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
