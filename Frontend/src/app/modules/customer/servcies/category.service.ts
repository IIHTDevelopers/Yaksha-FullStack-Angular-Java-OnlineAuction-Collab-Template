import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private host:string = "";

  constructor(private http: HttpClient) { }

  findAll(){
    return null;
  }

  

}



  