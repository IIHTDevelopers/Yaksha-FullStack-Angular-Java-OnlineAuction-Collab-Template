import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('SellerUI_ProductService', () => {
  let service: ProductService;

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
    // service = TestBed.inject(ProductService);
    service = new ProductService(httpClientSpy);
  });

  describe("boundary", () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  })
});
