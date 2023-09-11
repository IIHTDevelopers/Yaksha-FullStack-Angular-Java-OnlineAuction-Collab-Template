import { TestBed } from '@angular/core/testing';

import { SellerService } from './seller.service';

describe('SellerUI_SellerService', () => {
  let service: SellerService;

  const url = 'http://localhost:3004/products';
  let httpClientSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = {
      getNotes: jest.fn(),
      postNotes: jest.fn(),
      patchNotes: jest.fn(),
      deleteNotes: jest.fn()
    };
    // service = TestBed.inject(SellerService);
    service = new SellerService(httpClientSpy);
  });

  describe("boundary", () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
});
