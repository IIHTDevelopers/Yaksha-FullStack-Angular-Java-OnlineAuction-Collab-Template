import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seller } from 'src/app/models/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

 
  private host:string = "";

  constructor(private http: HttpClient) { }

  findAll(){
    return null;
  }

  findByPk(id:string|number){
    return null;
  }

 

  getRegistered(seller:Seller){
    return null;
  }

  update(seller:Seller){
    return null;
  }

  delete(id:number|string){
    return null;
  }

}
