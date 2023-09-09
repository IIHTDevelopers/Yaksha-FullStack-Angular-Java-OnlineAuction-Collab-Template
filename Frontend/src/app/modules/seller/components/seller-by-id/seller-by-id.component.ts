import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../../services/seller.service';
import { Seller } from 'src/app/models/seller';

@Component({
  selector: 'app-seller-by-id',
  templateUrl: './seller-by-id.component.html',
  styleUrls: ['./seller-by-id.component.scss']
})
export class SellerByIdComponent {
  // sellerId:number = 0;
  message:string = "";
  seller:Seller|undefined = undefined;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private sellerService:SellerService, 
    private router:Router
  ){

    

  }

  findSellerById(id:string){
    

  }

}
