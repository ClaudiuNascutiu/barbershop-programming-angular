import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';
import { UserService } from 'src/app/service/user-service/user.service';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { AppointmentDTO } from '../appointmentDTO/appointmentDTO';
import { AppointmentDTOForHairdresser } from '../appointmentDTO/appointmentDTOForHairdresser';


@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {

  @Input()
  appointment: AppointmentDTO = {
    id: NaN,
    day: new Date(),
    startTime: {} as Time,
    hairdresserName: "",
    hairdresserLastName: "",
    hairdresserPhone: "",
    hairdresserEmail: ""
  }

  @Input()
  appointmentForHairdresser: AppointmentDTOForHairdresser = {
    id: NaN,
    day: new Date,
    startTime: {} as Time,
    clientName: "",
    clientLastName: "",
    clientPhone: "",
    clientEmail: ""
  }



  constructor(private userService: UserService, private appointmentList: AppointmentListComponent) { }

  ngOnInit(): void {

  }



  clientOrHairdresser() {
    if (this.userService.getUser()?.role == "HAIRDRESSER") {
      return false;
    } else {
      return true;
    }
  }

  deleteAppointment(id: number) {
    this.appointmentList.deleteAppointment(id);
    if (confirm("Doriti sa stergeti programarea?")) {
      window.location.reload();
    }
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

  checkDay(date: any){
    date = new Date(date);
    if(date < new Date()){
      return false;
    }else{
      return true;
    }
  }
}
