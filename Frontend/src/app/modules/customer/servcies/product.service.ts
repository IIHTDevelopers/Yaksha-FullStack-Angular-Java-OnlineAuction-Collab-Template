import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private host:string = "";

  constructor(private http: HttpClient) { }

  findAll(){
    return null;
  }

  findByPk(id:string){
    return null;
  }

  delete(id:number){
    return null;
  }

  findBySellerId(id:number|string){
    return null;
  }

}
