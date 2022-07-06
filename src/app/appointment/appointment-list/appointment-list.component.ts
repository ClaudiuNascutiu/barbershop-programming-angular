import { Time } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/enum/role';
import { HairdresserCreateDTO } from 'src/app/hairdresser/hairdresserDTO/createHairdresserDTO';
import { HairdresserDTO } from 'src/app/hairdresser/hairdresserDTO/hairdresserDTO';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';
import { UserService } from 'src/app/service/user-service/user.service';
import { AppointmentDTO } from '../appointmentDTO/appointmentDTO';
import { AppointmentDTOForHairdresser } from '../appointmentDTO/appointmentDTOForHairdresser';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  clientId: number;
  appointment: AppointmentDTO[] = [];
  appointmentForHairdresser: AppointmentDTOForHairdresser[] = [];
  hairdresserId: number;

  constructor(private service: AppointmentService, private userService: UserService,
    private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(paramMap => {
      this.clientId = paramMap['id']
      this.hairdresserId = paramMap['id']
    })

    if(this.userService.getUser()?.role == "CLIENT"){
    this.service.getAllAppointmentsByClientId().subscribe(responseAppointment =>{
      this.appointment = responseAppointment;
    })}
    else if(this.userService.getUser()?.role == "HAIRDRESSER"){
     this.service.getAllAppointmentsByHairdresserId().subscribe(responseForHairdresser => {
      this.appointmentForHairdresser = responseForHairdresser;
    })}
  }

 deleteAppointment(appointments: AppointmentDTO){
  this.appointment = this.appointment.filter(a => a !== appointments)
  this.service.deleteAppointmentById(appointments).subscribe(response => {
    console.log(response)
  })
}
}

