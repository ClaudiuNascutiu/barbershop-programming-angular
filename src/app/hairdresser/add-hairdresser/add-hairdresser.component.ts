import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HairdresserService } from 'src/app/service/hairdresser-service/hairdresser.service';
import { HairdresserCreateDTO } from '../hairdresserDTO/createHairdresserDTO';



@Component({
  selector: 'app-add-hairdresser',
  templateUrl: './add-hairdresser.component.html',
  styleUrls: ['./add-hairdresser.component.css']
})
export class AddHairdresserComponent implements OnInit {



  createHairdresserDTO: HairdresserCreateDTO = {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    password: "",

  };


  constructor(private service: HairdresserService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onClick() {

    this.service.createHairdresser(this.createHairdresserDTO).subscribe(response => {
      console.log(response);
    })

  }




}
