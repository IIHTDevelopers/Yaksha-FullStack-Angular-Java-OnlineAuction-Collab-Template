import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../servcies/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent {

  constructor(private router:Router, private customerService:CustomerService){
    this.fetchAllCustomers();
  }
  message:string="";
  customers:Customer[] = []

updateCustomer(customerId:number){
  
}

fetchAllCustomers(){
 
}
  deleteCustomer(customerId:number){
   
  }

}
