import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentDTO } from '../../appointment/appointmentDTO/appointmentDTO';
import { AppointmentService } from '../../service/appointment-service/appointment.service';
import { HairdresserService } from '../../service/hairdresser-service/hairdresser.service';
import { UserService } from '../../service/user-service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appointmentCard: AppointmentDTO [] = [];


  constructor(private service: HairdresserService, private userService: UserService, 
    private routerLink: Router, private appointmentService: AppointmentService) { }

  ngOnInit(): void {

    this.appointmentService.getAllAppointmentsByClientIdAfter().subscribe(response => {
      this.appointmentCard = response;
    })

  }

  getRole() {
    return this.service.getAllHairdresser();
  }

  checkLogin(){
    if(this.userService.getUser() == null || this.userService.getUser() == undefined){
      alert("Trebuie sa va logati!");
      this.routerLink.navigate([""]);
    }
  }

  checkRole(){
    if(this.userService.getUser()?.role == "CLIENT"){
      return false;
    }else{
      return true;
    }
  }

  getUserId() {
    return this.userService.getUser()?.id;
  }

  checkAppointment(){
    if(this.appointmentCard.length > 0){
      return true;
    }else{
      return false;
    }
  }
  
}
