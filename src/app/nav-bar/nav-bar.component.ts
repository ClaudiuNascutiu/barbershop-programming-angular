import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user-service/user.service';
import { Router } from '@angular/router';
import { UserCreateDTO } from '../user/UserDTO/UserCreateDto';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  firstname = ""

  lastname = ""

  phoneNumber = ""

  email = ""

  password = ""

  constructor(private service: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const createUserDTO = {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "phoneNumber": this.phoneNumber,
      "email": this.email,
      "password": this.password
    };
    this.service.createUser(createUserDTO).subscribe(response => {
      console.log(response);
    })
  }

  onClick() {
    this.service.login(new UserCreateDTO(this.firstname, this.lastname, 
      this.phoneNumber, this.email, this.password));
    this.router.navigate(['']);
  }

  userLoggedIn() {
      if(this.service.getUser() == null || this.service.getUser() == undefined){
        return false;
      }else{
        return true;
      }
  }
  logoutUser() {
    this.service.logout();
    this.router.navigate([""])
  }

  getUserName(){
   return this.service.getUser()?.lastname;
  }

  getUserId() {
    return this.service.getUser()?.id;
  }
}
