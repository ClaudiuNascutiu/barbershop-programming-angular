import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timestamp } from 'rxjs/internal/operators/timestamp';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';
import { UserService } from 'src/app/service/user-service/user.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  day = new Date();
  hairdresserId = NaN;
  clientId = NaN;

  startTime = {} as Time;

  availableSlots: Time[] = [];

  constructor(private service: AppointmentService, private clientService: UserService,
    private router: ActivatedRoute, private routerLink: Router) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(paramMap => {
      this.hairdresserId = paramMap['id']
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
