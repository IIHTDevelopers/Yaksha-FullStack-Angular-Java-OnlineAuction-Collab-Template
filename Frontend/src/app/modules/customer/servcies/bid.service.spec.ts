import { TestBed } from '@angular/core/testing';

import { BidService } from './bid.service';
import { of } from 'rxjs';

describe('CustomerUI_BidService', () => {
  let service: BidService;

  const url = 'http://127.0.0.1:3004/bids';
  let httpClientSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = {
      get: jest.fn(),
      post: jest.fn()
    };
    // service = TestBed.inject(BidService);
    service = new BidService(httpClientSpy);
  });

  describe("boundary", () => {

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

  });

  describe("functional", () => {

    it('testing getBids', () => {
      const res = 'Bid';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
      service.findAllByProductId(2);
      expect(httpClientSpy.get).toBeCalledTimes(1);
      // expect(httpClientSpy.get).toHaveBeenCalledWith('http://127.0.0.1:3004/bids?productId=2');
      expect(httpClientSpy.get).toHaveBeenCalledWith('http://localhost:8080/online-auction-system/customers/get/all-bids-on-product/2');
    });

    it('testing post bid', () => {
      const bid: any = {
        bidAmount: 102,
        biddingDate: new Date(),
        productId: 1,
        customerId: 6
      };
      const res = 'Bid';

      jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
      service.placeBid(bid);
      expect(httpClientSpy.post).toBeCalledTimes(1);
    });

  });


});
