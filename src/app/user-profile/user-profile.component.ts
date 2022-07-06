
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


  firstname = this.userService.getUser()?.firstname;
  lastname = this.userService.getUser()?.lastname;
  phoneNumber = this.userService.getUser()?.phoneNumber;
  email = this.userService.getUser()?.email;

  constructor(private userService: UserService, private appointmentService: AppointmentService,
    private routerLink: Router) { }

  ngOnInit(): void {
  }

  updateUser() {
    const updateUserDTO = {
      "id": this.userService.getUser()?.id,
      "firstname": this.firstname,
      "lastname": this.lastname,
      "phoneNumber": this.phoneNumber,
      "email": this.email,
      "password": this.userService.getUser()?.password,
      "role": this.userService.getUser()?.role

    }
    this.userService.updateUser(updateUserDTO).subscribe()
    alert("Contul dumneavoastra a fost editat")
  }

  getFirstname() {
    return this.userService.getUser()?.firstname
  }

  getLastname() {
    return this.userService.getUser()?.lastname
  }

  getPhoneNumber() {
    return this.userService.getUser()?.phoneNumber
  }

  getEmail() {
    return this.userService.getUser()?.email
  }

  deleteUser() {
    if (this.appointmentService.getAllAppointmentsByClientId != null) {
      this.appointmentService.deleteAllAppointmentByClientId().subscribe()
    }

    this.userService.deleteUser().subscribe();

    alert("Contul tau a fost sters")

    this.userService.logout()
    this.routerLink.navigate([""])
  }


}
