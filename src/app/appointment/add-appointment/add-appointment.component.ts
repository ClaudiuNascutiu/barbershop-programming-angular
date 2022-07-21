import { Time } from '@angular/common';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HairdresserDTO } from 'src/app/hairdresser/hairdresserDTO/hairdresserDTO';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';
import { UserService } from 'src/app/service/user-service/user.service';



@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class AddAppointmentComponent implements OnInit {

  day = new Date();
  hairdresserId = NaN;
  clientId = NaN;

  startTime = {} as Time;
  availableSlots: Time[] = [];
  
  hairdresser = {} as HairdresserDTO;

  constructor(private service: AppointmentService, private userService: UserService,
    private router: ActivatedRoute, private routerLink: Router,
    ) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(paramMap => {
      this.hairdresserId = paramMap['id']
    })

    this.userService.getUserById(this.hairdresserId).subscribe(response => {
      this.hairdresser = response;
    })
  }

  onClickAddAppointment() {
    const createAppointmentDTO = {
      "day": this.day,
      "startTime": this.startTime,
      "hairdresserId": this.hairdresserId,
      "clientId": this.userService.getUser()?.id
    };
    this.service.createAppointment(createAppointmentDTO).subscribe(response =>
      console.log(response));
    alert("Mulțumim pentru programare")
    this.routerLink.navigate([""])
  }

  clickForClose() {
    this.routerLink.navigate(["/hairdressers"]);
  }

  showAvailableSlots() {
    this.service.getAvailableSlots(this.hairdresserId, this.day).subscribe(responseAvailableSlot => {
      console.log(responseAvailableSlot);
      this.availableSlots = responseAvailableSlot;

    })

  }

  onAvaialbleTimeClick(time: Time) {
    console.log(time);
    this.startTime = time;
  }
}

