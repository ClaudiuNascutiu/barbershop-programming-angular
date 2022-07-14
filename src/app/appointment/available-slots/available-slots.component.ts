import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';

@Component({
  selector: 'app-available-slots',
  templateUrl: './available-slots.component.html',
  styleUrls: ['./available-slots.component.css']
})
export class AvailableSlotsComponent implements OnInit {

  @Input()
  availableSlots: Time = {
    hours: NaN,
    minutes: NaN
  }

  constructor(private service: AppointmentService,private router: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
