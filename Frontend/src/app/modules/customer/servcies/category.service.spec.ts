import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { of } from 'rxjs';

describe('CustomerUI_CategoryService', () => {
  let service: CategoryService;

  const url = 'http://localhost:3004/categories';
  let httpClientSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = {
      get: jest.fn()
    };
    // service = TestBed.inject(CategoryService);
    service = new CategoryService(httpClientSpy);
  });

  describe("boundary", () => {

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  })
  describe("functional", () => {

    it('testing get all categories', async () => {
      const res = 'categories';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
      service.findAll();
      expect(httpClientSpy.get).toBeCalledTimes(1);
      expect(httpClientSpy.get).toHaveBeenCalledWith(url + '/');
    });
  });

});
