import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerByIdComponent } from './seller-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Seller } from 'src/app/models/seller';
import { of } from 'rxjs';
import { SellerService } from '../../services/seller.service';

describe('SellerByIdComponent', () => {
  let component: SellerByIdComponent;
  let fixture: ComponentFixture<SellerByIdComponent>;

  const seller: Seller = {
    sellerId: 1,
    sellerName: "seller01",
    sellerEmail: "seller01@gmail.com",
    address: "delhi",
    phoneNumber: 6655447788,
    password: "seller01"
  }
  let mockService = {
    findByPk: (sellerId: number) => { return of(seller) }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerByIdComponent],
      providers: [{ provide: SellerService, useValue: mockService }],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SellerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", () => {
    it('sellerUI should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe("functional", () => {
    it('sellerUI should fetch seller by id', () => {

      jest.spyOn(mockService, 'findByPk').mockReturnValue(of(seller));
      component.findSellerById("124");

      expect(mockService.findByPk).toBeCalledTimes(1);
      expect(mockService.findByPk).toBeCalledWith("124");
    })
  })

});
