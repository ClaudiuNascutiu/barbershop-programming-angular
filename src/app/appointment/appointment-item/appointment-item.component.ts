import {  Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/enum/role';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';
import { UserService } from 'src/app/service/user-service/user.service';
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
    day: new Date,
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
  appointments: AppointmentDTO[];

  constructor(private userService: UserService, private appointmentService: AppointmentService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(paramMap => {
      this.appointment.id = paramMap['id']
    })
  }

  clientOrHairdresser(){
     if(this.userService.getUser()?.role == "HAIRDRESSER"){
      return false
    }else{
      return true
    }
  }

  deleteAppointment(appointment: AppointmentDTO){
    this.appointments = this.appointments.filter(a => a !== appointment)
    this.appointmentService.deleteAppointmentById(appointment).subscribe(response => {
      console.log(response)
    })
  }

}
