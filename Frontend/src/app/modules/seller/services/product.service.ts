import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private host:string = "";

  constructor(private http: HttpClient) { }

  createProduct(product:Product){
    return null;
  }

  updateProduct(product:Product){
    return null;
  }

  

}
