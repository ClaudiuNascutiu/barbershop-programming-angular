import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '/Users/claudiunascutiu/CursJava/Final Project/BarberShopProgrammingAngular/src/app/service/client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  constructor(private service: ClientService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    alert("Congratulations for subscribe")
    const createClientDTO = {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "phoneNumber": this.phoneNumber,
      "email": this.email,
      "password": this.password
    };
    this.service.createClient(createClientDTO).subscribe(response => {
      console.log(response);
    })
  }

}
