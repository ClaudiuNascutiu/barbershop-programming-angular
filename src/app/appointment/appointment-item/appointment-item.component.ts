import {  Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppointmentDTO } from '../appointmentDTO/appointmentDTO';


@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {
   
  @Input()
  appointment: AppointmentDTO = {
    day: new Date,
    startTime: {} as Time,
    hairdresserName: "",
    hairdresserLastName: "",
    hairdresserPhone: "",
    hairdresserEmail: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
