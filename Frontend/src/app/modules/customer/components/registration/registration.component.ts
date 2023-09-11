import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomerService } from '../../servcies/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm:FormGroup;
  message:string = "";

  constructor(private customerService:CustomerService, private router:Router){

    this.registrationForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      address: new FormControl()
    })
  }

  register(){
    

  }
}
