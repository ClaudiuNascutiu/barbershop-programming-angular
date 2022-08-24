import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user-service/user.service';
import { AppointmentService } from '../service/appointment-service/appointment.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  // firstname = this.userService.getUser()?.firstname;
  // lastname = this.userService.getUser()?.lastname;
  // phoneNumber = this.userService.getUser()?.phoneNumber;
  // email = this.userService.getUser()?.email;
  updateUserDTO = {
    "id": this.userService.getUser().id,
    "firstname": this.userService.getUser().firstname,
    "lastname": this.userService.getUser().lastname,
    "phoneNumber": this.userService.getUser().phoneNumber,
    "email": this.userService.getUser().email,
    "password": this.userService.getUser().password,
    "role": this.userService.getUser().role
  }

  constructor(private userService: UserService, private appointmentService: AppointmentService,
    private routerLink: Router) { }

  ngOnInit(): void {
  }

  updateUser() {
    this.userService.updateUser(this.updateUserDTO).subscribe(response => {
      console.log(response);
      this.userService.setUser(response);
    })

    alert("Contul dumneavoastra a fost editat");

    window.location.reload();

  }
  async deleteAllAppointment(): Promise<void> {
    let resolveRef: (value: void | PromiseLike<void>) => void;
    let rejectRef;

    let dataPromise: Promise<void> = new Promise((resolve, reject) => {
      resolveRef = resolve;
      rejectRef = reject;
    })

    if (this.appointmentService.getAllAppointmentsByClientIdAfter() != null ||
      this.appointmentService.getAllAppointmentsByHairdresserId != null) {
      this.appointmentService.deleteAllAppointmentByUserId().subscribe(() =>{
      
      resolveRef(null);
    }
      );
    }

    return dataPromise;
  }

  async deleteUser() {

    await this.deleteAllAppointment().then();
    this.userService.deleteUser().subscribe();

    alert("Contul tau a fost sters")

    this.userService.logout()
    this.routerLink.navigate([""])
  }

}
