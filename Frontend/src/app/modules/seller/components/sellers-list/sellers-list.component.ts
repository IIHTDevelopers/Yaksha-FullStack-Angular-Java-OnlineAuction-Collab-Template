import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-sellers-list',
  templateUrl: './sellers-list.component.html',
  styleUrls: ['./sellers-list.component.scss']
})
export class SellersListComponent {
  message:string="";
  sellers:any = []

  constructor(private router:Router, private sellerService:SellerService){
    this.fetchAllSellers();
  }

  fetchAllSellers(){
   
  }


  deleteSeller(sellerId:string|number){
  }
}
