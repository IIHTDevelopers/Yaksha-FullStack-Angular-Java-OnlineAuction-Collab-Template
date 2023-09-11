import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SellerService } from '../../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm:FormGroup;
  message:string = "";

  constructor(private sellerService:SellerService, private router:Router){
    this.registrationForm = new FormGroup({
      sellerName: new FormControl(),
      password: new FormControl(),
      sellerEmail: new FormControl(),
      phoneNumber: new FormControl(),
      address: new FormControl()
    })
  }

  register(){
    

  }

}
