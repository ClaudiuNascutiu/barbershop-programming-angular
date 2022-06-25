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
    id: NaN,
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: ""
  }
  @Input()
  day: "2022-06-24"

  constructor() {
   }

  ngOnInit(): void {
  }

  
  

}
