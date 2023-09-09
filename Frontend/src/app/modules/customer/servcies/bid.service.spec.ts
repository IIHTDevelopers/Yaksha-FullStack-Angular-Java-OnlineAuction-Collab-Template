import { TestBed } from '@angular/core/testing';

import { BidService } from './bid.service';
import { of } from 'rxjs';

describe('BidService', () => {
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

    it('customerUI should be created', () => {
      expect(service).toBeTruthy();
    });

  });

  describe("functional", () => {

    it('customerUI testing getBids', () => {
      const res = 'Bid';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
      service.findAllByProductId(2);
      expect(httpClientSpy.get).toBeCalledTimes(1);
      // expect(httpClientSpy.get).toHaveBeenCalledWith('http://127.0.0.1:3004/bids?productId=2');
      expect(httpClientSpy.get).toHaveBeenCalledWith('http://localhost:8080/online-auction-system/customers/get/all-bids-on-product/2');
    });

    it('customerUI testing post bid', () => {
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
