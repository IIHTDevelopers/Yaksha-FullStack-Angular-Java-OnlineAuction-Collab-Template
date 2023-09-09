import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { shouldBeFutureDateValidator } from '../../validators/should-be-future-date-validator';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  createProductForm:FormGroup;
  today:Date = new Date();
  message:string = ""

  constructor(private productService:ProductService){
    this.createProductForm = new FormGroup({
      name: new FormControl(),
      sellerId: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
      quantity: new FormControl(),
      price: new FormControl(),
      startingBidAmount: new FormControl(),
      lastDateOfBidding: new FormControl()
    })
  }

  createProduct(){
    

  }

  
}
 