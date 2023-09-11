import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductByIdComponent } from './product-by-id.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Bid } from 'src/app/models/bid';
import { of } from 'rxjs';
import { BidService } from '../../servcies/bid.service';

describe('CustomerUI_ProductByIdComponent', () => {
  let component: ProductByIdComponent;
  let fixture: ComponentFixture<ProductByIdComponent>;

  const bid: Bid = {
    id: 1,
    bidAmount: 120,
    biddingDate: new Date(),
    productId: 1,
    customerId: 1
  }
  let mockService = {
    placeBid: (bid: Bid) => { return of(bid) },
    findAllByProductId: (productId: number) => { return of([bid]) }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductByIdComponent],
      providers: [{ provide: BidService, useValue: mockService }],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe("functional", () => {
    it('should place bid', () => {

      component.bidForm.controls['bidAmount'].setValue(bid.bidAmount);
      component.bidForm.controls['biddingDate'].setValue(bid.biddingDate);
      component.bidForm.controls['productId'].setValue(bid.productId);
      component.bidForm.controls['customerId'].setValue(bid.customerId);

      jest.spyOn(mockService, 'placeBid').mockReturnValue(of(bid));
      component.placeBid();

      expect(mockService.placeBid).toBeCalledTimes(1);
    })

    it('should fetch all bids by product id', () => {

      jest.spyOn(mockService, 'findAllByProductId').mockReturnValue(of([bid]));
      component.productId = 123;
      component.allBids();

      expect(mockService.findAllByProductId).toBeCalledTimes(1);
      expect(mockService.findAllByProductId).toBeCalledWith(123);

    })

  });
});
