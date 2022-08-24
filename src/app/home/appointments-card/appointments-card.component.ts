import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppointmentDTO } from 'src/app/appointment/appointmentDTO/appointmentDTO';

@Component({
  selector: 'app-appointments-card',
  templateUrl: './appointments-card.component.html',
  styleUrls: ['./appointments-card.component.css']
})
export class AppointmentsCardComponent implements OnInit {

  @Input()
  appointmentCard: AppointmentDTO = {
    id: NaN,
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

  formatDate(date: any): string {
    const days = ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'];
    date = new Date(date);
    const dayName = days[date.getDay()];

    const monthNames = ["Ian.", "Feb.", "Mar.", "Apr.", "May.", "Iun.",
      "Iul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
    ];
    const d = new Date(date);
    const monthName = monthNames[d.getMonth()]
    
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() + '';

    return dayName + `  ${day} ` + monthName;
  }
}
