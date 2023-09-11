import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../servcies/customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  customer:Customer | undefined;

  updateForm:FormGroup;
  message:string = "";
  custName:string = "";

  

  constructor(
    private activatedRoute:ActivatedRoute, 
    private customerService:CustomerService, 
    private router:Router
  ){

    this.updateForm = new FormGroup({
      id: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      address: new FormControl()
    })

   
  }
    
  initFormGroup(){
   
  }
  
  

  updateCustomer(){
    

  }
}
