import { Component, Input, OnInit } from '@angular/core';
import { HairdresserDTO } from '../hairdresserDTO/hairdresserDTO';

@Component({
  selector: 'app-hairdresser-item',
  templateUrl: './hairdresser-item.component.html',
  styleUrls: ['./hairdresser-item.component.css']
})
export class HairdresserItemComponent implements OnInit {

  @Input()
  hairdresser: HairdresserDTO = {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: ""
  }

  constructor() {
   }

  ngOnInit(): void {
  }

}
