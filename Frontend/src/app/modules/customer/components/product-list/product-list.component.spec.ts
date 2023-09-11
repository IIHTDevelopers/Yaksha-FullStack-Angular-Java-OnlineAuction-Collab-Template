import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductListComponent } from './product-list.component';
import { Product } from 'src/app/models/product';
import { of } from 'rxjs';
import { ProductService } from '../../servcies/product.service';
import { BidService } from '../../servcies/bid.service';

describe('CustomerUI_ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  const product: Product = {
    productId:1,
    name:"mobile",
    sellerId:1,
    description:"this is a demo item",
    quantity:2,
    price:205,
    startingBidAmount:210,
    lastDateOfBidding:'2024-02-02',
    category:"mobiles"
  }

  let mockService = {
    findAll: ()=>{return of([product])},
    delete: (id:number)=>{return of(product)}
  }
  let mockBidService = {
    findAllByProductId: (id:number)=>{return of([product])}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [
        {provide: ProductService, useValue: mockService},
        {provide: BidService, useValue: mockBidService} 
      ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", ()=>{
    it('should create', () => {
    expect(component).toBeTruthy();
  });

});

describe("functional", ()=>{
  it('should fetch all products', ()=>{

    
    component.products=[];

    jest.spyOn(mockService, 'findAll').mockReturnValue(of([product]));
    component.fetchAllProducts();
    
    expect(mockService.findAll).toBeCalledTimes(1);
    expect(component.products.length).toBeGreaterThan(0);

    expect(Array.isArray(component.products)).toBe(true);
  })

  it('should delete product by id', ()=>{

    jest.spyOn(mockService, 'delete').mockReturnValue(of(product));
    component.deleteProduct(197);
    
    expect(mockService.delete).toBeCalledTimes(1);
    expect(mockService.delete).toBeCalledWith(197);

  })

  it('should fetch product by id', ()=>{

    jest.spyOn(mockBidService, 'findAllByProductId').mockReturnValue(of([product]));
    component.getProductBids(999);

    expect(mockBidService.findAllByProductId).toBeCalledTimes(1);
    expect(mockBidService.findAllByProductId).toBeCalledWith(999);
  })

});

});
