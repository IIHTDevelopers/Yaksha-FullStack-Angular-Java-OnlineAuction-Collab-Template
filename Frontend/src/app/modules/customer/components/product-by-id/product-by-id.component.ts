import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { BidService } from '../../servcies/bid.service';
import { Bid } from 'src/app/models/bid';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.scss']
})
export class ProductByIdComponent {
  productId:number = 0;
  message:string = "";
  product:any = null;
  bidForm:FormGroup;
  products:Product[] = [];
  today:Date = new Date();
  bids:Bid[] = [];

  constructor(
    private activatedRoute:ActivatedRoute, 
    private router:Router, 
    private bidService:BidService
  ){


    this.fetchAllProducts();

    this.bidForm = new FormGroup({
      bidAmount: new FormControl(),
      biddingDate: new FormControl(),
      productId: new FormControl(),
      customerId: new FormControl()
    })
       
    

  }

  fetchAllProducts(){}

 

  fetchProductByPrimaryKey(){
    
  }

  placeBid(){
    
  }

  allBids(){
    
  }
}
