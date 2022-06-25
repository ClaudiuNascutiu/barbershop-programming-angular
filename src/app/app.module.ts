import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AddHairdresserComponent } from './hairdresser/add-hairdresser/add-hairdresser.component';
import { HairdresserItemComponent } from './hairdresser/hairdresser-item/hairdresser-item.component';
import { HairdresserListComponent } from './hairdresser/hairdresser-list/hairdresser-list.component';
import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';
import { AppointmentItemComponent } from './appointment/appointment-item/appointment-item.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvailableSlotsComponent } from './appointment/available-slots/available-slots.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AddHairdresserComponent,
    HairdresserItemComponent,
    HairdresserListComponent,
    AddAppointmentComponent,
    AppointmentItemComponent,
    AppointmentListComponent,
    UserProfileComponent,
    AvailableSlotsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
