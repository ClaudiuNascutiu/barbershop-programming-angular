import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment-service/appointment.service';
import { UserService } from 'src/app/service/user-service/user.service';
import { AppointmentDTO } from '../appointmentDTO/appointmentDTO';
import { AppointmentDTOForHairdresser } from '../appointmentDTO/appointmentDTOForHairdresser';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointmentBefore: AppointmentDTO[] = [];
  appointmentAfter: AppointmentDTO[] = [];
  appointmentForHairdresser: AppointmentDTOForHairdresser[] = [];
  

  constructor(private service: AppointmentService, private userService: UserService,
    private router: ActivatedRoute) {

  }

  ngOnInit(): void {

    if(this.userService.getUser()?.role == "CLIENT"){
    this.service.getAllAppointmentsByClientIdBefore().subscribe(responseAppointment =>{
      this.appointmentBefore = responseAppointment;
    })
    this.service.getAllAppointmentsByClientIdAfter().subscribe(responseAppointment =>{
      this.appointmentAfter = responseAppointment;
  })}
    else if(this.userService.getUser()?.role == "HAIRDRESSER"){
     this.service.getAllAppointmentsByHairdresserId().subscribe(responseForHairdresser => {
      this.appointmentForHairdresser = responseForHairdresser;
    })}
  }

 deleteAppointment(id: number){
  // this.appointment = this.appointment.filter(a => a !== appointments)
  this.service.deleteAppointmentById(id).subscribe()
}

formatDate(day: Date): string {
  // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(day);
  var dayName = d.toString().split(' ')[0];
  return dayName;
}

countAppointmentBefore(): number{
  return this.appointmentBefore.length;
}

countAppointmentAfter(): number{
  return this.appointmentAfter.length;
}


}

