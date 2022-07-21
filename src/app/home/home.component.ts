import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HairdresserService } from '../service/hairdresser-service/hairdresser.service';
import { UserService } from '../service/user-service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: HairdresserService, private userService: UserService, 
    private routerLink: Router) { }

  ngOnInit(): void {
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
  
}
