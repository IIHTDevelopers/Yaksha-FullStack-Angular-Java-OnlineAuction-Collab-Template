import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../servcies/product.service';
import { BidService } from '../../servcies/bid.service';
import { Bid } from 'src/app/models/bid';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  message:string = "";

  products:Product[] = []
  bids:Bid[] = [];

constructor(private router:Router, private productService:ProductService, private bidService:BidService){
  this.fetchAllProducts();
}

fetchAllProducts(){
  
}

getProductBids(productId:number){
  
}

  deleteProduct(productId:number){
  }
}
