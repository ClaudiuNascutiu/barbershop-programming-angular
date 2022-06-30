import {  getLocaleDateFormat, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';
import { UserService } from 'src/app/service/user-service/user.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  day = new Date
  startTime = {} as Time
  hairdresserId = NaN
  clientId = NaN

  availableSlots: Time [] = [];

  constructor(private service: AppointmentService, private clientService: UserService,
    private router: ActivatedRoute, private routerLink: Router) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(paramMap => {
      this.hairdresserId = paramMap['id']
      this.day = paramMap['day']
    })

    this.service.getAvailableSlots(this.hairdresserId, this.day).subscribe(responseAvailableSlot => {
      this.availableSlots = JSON.parse(responseAvailableSlot);
    })
  }

  onClickAddAppointment() {
    const createAppointmentDTO = {
      "day": this.day,
      "startTime": this.startTime,
      "hairdresserId": this.hairdresserId,
      "clientId": this.clientService.getUser()?.id
    };
    this.service.createAppointment(createAppointmentDTO).subscribe(response =>
      console.log(response));
      alert("Multumim pentru programare")
      this.routerLink.navigate([""])
    }

    clickForClose(){
      this.routerLink.navigate(["/hairdressers"]);
    }
}
