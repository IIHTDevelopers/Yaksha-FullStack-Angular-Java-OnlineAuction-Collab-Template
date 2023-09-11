import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bid } from 'src/app/models/bid';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  
  private host:string = ``;

  constructor(private http: HttpClient) { }

  placeBid(bid:Bid){
    
    return null;
  }

  findAllByProductId(productId:number){
    
    return null;
  }
}



  