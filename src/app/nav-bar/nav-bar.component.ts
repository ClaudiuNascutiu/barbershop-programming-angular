import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user-service/user.service';
import { Router } from '@angular/router';
import { UserCreateDTO } from '../user/UserDTO/UserCreateDto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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
  passwordMatching = ""

  showModal: boolean;
  showModalForSignup: boolean;
  registerForm: FormGroup;
  submitted = false;

  constructor(private service: UserService,
    private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname:['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required, Validators.min(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordMatching: ['', [Validators.required, Validators.minLength(5)]]
  });
  }

  show()
  {
    this.showModal = true;
    
  }

  showForSignup(){
    this.showModalForSignup = true;
  }

  hide()
  {
    this.showModal = false;
  }
  hideForSignup()
  {
    this.showModalForSignup = false;
  }

  get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
  }

  clickedOut(event: any){
    if(event.target.className === "modal"){
      this.showModal = false;
    }
  }
  clickedOutForSignup(event: any){
    if(event.target.className === "modal"){
      this.showModalForSignup = false;
    }
  }
  
  signUp() {
    const createUserDTO = {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "phoneNumber": this.phoneNumber,
      "email": this.email,
      "password": this.password,
      "passwordMatching": this.passwordMatching
    };
    this.service.createUser(createUserDTO).subscribe(response => {
      console.log(response);
    })
    this.hideForSignup();
    
  }

  login() {
    this.service.login(new UserCreateDTO(this.firstname, this.lastname,
      this.phoneNumber, this.email, this.password, this.passwordMatching));
    this.router.navigate(['']);
    this.hide();
  }

  logoutUser() {
    this.service.logout();
    window.location.reload();
    this.router.navigate([""])
  }

  userLoggedIn() {
    if (this.service.getUser() == null || this.service.getUser() == undefined) {
      return false;
    } else {
      return true;
    }
  }


  getUserName() {
    return this.service.getUser()?.lastname;
  }

  getUserId() {
    return this.service.getUser()?.id;
  }





}
