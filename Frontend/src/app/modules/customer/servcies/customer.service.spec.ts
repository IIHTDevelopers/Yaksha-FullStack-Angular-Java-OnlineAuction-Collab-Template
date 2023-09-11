import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { of } from 'rxjs';
import { Customer } from 'src/app/models/customer';

describe('CustomerUI_CustomerService', () => {
  let service: CustomerService;

  const url = 'http://localhost:3004/customers';
  let httpClientSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = {
      getNotes: jest.fn(),
      postNotes: jest.fn(),
      patchNotes: jest.fn(),
      deleteNotes: jest.fn()
    };
    // service = TestBed.inject(CustomerService);
    service = new CustomerService(httpClientSpy);
  });

  describe("boundary", () => {

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  })
});
