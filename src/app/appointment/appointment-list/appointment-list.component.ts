import { Time } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HairdresserCreateDTO } from 'src/app/hairdresser/hairdresserDTO/createHairdresserDTO';
import { HairdresserDTO } from 'src/app/hairdresser/hairdresserDTO/hairdresserDTO';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';
import { UserService } from 'src/app/service/user-service/user.service';
import { AppointmentDTO } from '../appointmentDTO/appointmentDTO';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  clientId: number;
  appointment: AppointmentDTO[] = []

  constructor(private service: AppointmentService, private userService: UserService,
    private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(paramMap => {
      this.clientId = paramMap['id']
    })

    this.service.getAllAppointmentsByClientId().subscribe(responseAppointment =>{
      this.appointment = responseAppointment
    })
  }
}

