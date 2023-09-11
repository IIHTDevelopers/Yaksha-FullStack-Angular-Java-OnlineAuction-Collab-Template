import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 
  private host:string = ``;

  constructor(private http: HttpClient) { }

  findAll(){
    
    return null;
  }

  findByPk(id:string){
    
    return null;
  }

  

  getRegistered(customer:Customer){
    return null;
  }

  updateCustomer(customer:Customer){
    return null;
  }

  deleteCustomer(id:number){
    return null;
  }

}
