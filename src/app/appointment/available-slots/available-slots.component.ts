import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';

@Component({
  selector: 'app-available-slots',
  templateUrl: './available-slots.component.html',
  styleUrls: ['./available-slots.component.css']
})
export class AvailableSlotsComponent implements OnInit {

  availableSlots: Time [] = [];

  day = new Date
  hairdresserId = NaN

  constructor(private service: AppointmentService,private router: ActivatedRoute,) { }

  ngOnInit(): void {
    this.router.params.subscribe(paramMap => {
      this.hairdresserId = paramMap['id']
      this.day = paramMap['day']
    })

    this.service.getAvailableSlots(this.hairdresserId, this.day).subscribe(responseAvailableSlot => {
      this.availableSlots = responseAvailableSlot;
    })
  }

}
