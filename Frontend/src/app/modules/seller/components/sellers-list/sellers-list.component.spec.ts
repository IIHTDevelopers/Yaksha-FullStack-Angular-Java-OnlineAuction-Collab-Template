import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SellersListComponent } from './sellers-list.component';
import { of } from 'rxjs';
import { Seller } from 'src/app/models/seller';
import { SellerService } from '../../services/seller.service';

describe('SellerUI_SellersListComponent', () => {
  let component: SellersListComponent;
  let fixture: ComponentFixture<SellersListComponent>;

  const seller: Seller = {
    sellerId: 1,
    sellerName: "seller01",
    sellerEmail: "seller01@gmail.com",
    address: "delhi",
    phoneNumber: 6655447788,
    password: "seller01"
  }

  let mockService = {
    findAll: () => { return of([seller]) },
    delete: (id: number | string) => { return of(seller) }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellersListComponent],
      providers: [{ provide: SellerService, useValue: mockService }],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SellersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe("functional", () => {

    it('should fetch all sellers', () => {


      component.sellers = [];

      jest.spyOn(mockService, 'findAll').mockReturnValue(of([seller]));
      component.fetchAllSellers();

      expect(mockService.findAll).toBeCalledTimes(1);
      expect(component.sellers.length).toBeGreaterThan(0);

      expect(Array.isArray(component.sellers)).toBe(true);
    })

    it('should delete seller by id', () => {

      jest.spyOn(mockService, 'delete').mockReturnValue(of(seller));
      component.deleteSeller("1");

      expect(mockService.delete).toBeCalledTimes(1);
      expect(mockService.delete).toBeCalledWith("1");

    })

  });
});
