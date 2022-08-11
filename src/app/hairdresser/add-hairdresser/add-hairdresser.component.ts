import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';
import { HairdresserService } from 'src/app/service/hairdresser-service/hairdresser.service';


@Component({
  selector: 'app-add-hairdresser',
  templateUrl: './add-hairdresser.component.html',
  styleUrls: ['./add-hairdresser.component.css']
})
export class AddHairdresserComponent implements OnInit {

  firstname = ""

  lastname = ""

  phoneNumber = ""

  email = ""

  password = ""

  constructor(private service: HairdresserService) { }

  ngOnInit(): void {
  }

  onClick(){
    const createHairdresserDTO = {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "phoneNumber": this.phoneNumber,
      "email": this.email,
      "password": this.password
    };
    this.service.createHairdresser(createHairdresserDTO).subscribe(response => {
      console.log(response);
    })
    
  }

}
