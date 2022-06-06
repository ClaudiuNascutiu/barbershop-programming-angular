import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  firstname = ""

  lastname = ""

  phoneNumber = ""

  email = ""

  password = ""

  

  constructor(private service: ClientService) { 
  }

  ngOnInit(): void {
  }

  onClick(){
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
