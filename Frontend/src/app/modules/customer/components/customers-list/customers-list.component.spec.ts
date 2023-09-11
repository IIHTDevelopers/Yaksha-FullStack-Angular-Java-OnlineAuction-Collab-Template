import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListComponent } from './customers-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from '../../servcies/customer.service';
import { of } from 'rxjs';

describe('CustomerUI_CustomersListComponent', () => {
  let component: CustomersListComponent;
  let fixture: ComponentFixture<CustomersListComponent>;

    const customer: Customer = {
      id:1,
      username:"cus01",
      password:"cus01",
      email:"cus01@gmail.com",
      phoneNumber:2255889966,
      address:"bangalore"
    }

    let mockService = {
      findAll: ()=>{return of([customer])},
      deleteCustomer: (id:number)=>{return of(customer)}
    }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersListComponent ],
      providers: [{provide: CustomerService, useValue: mockService} ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", ()=>{
    
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  });

  describe("functional", ()=>{
    
    it('should fetch all customers', ()=>{
    
    component.customers=[];

    jest.spyOn(mockService, 'findAll').mockReturnValue(of([customer]));
    component.fetchAllCustomers();
    
    expect(mockService.findAll).toBeCalledTimes(1);
    expect(component.customers.length).toBeGreaterThan(0);

    expect(Array.isArray(component.customers)).toBe(true);
  })


  it('should delete customer by id', ()=>{

    jest.spyOn(mockService, 'deleteCustomer').mockReturnValue(of(customer));
    component.deleteCustomer(157);
    
    expect(mockService.deleteCustomer).toBeCalledTimes(1);
    expect(mockService.deleteCustomer).toBeCalledWith(157);

  })
});
});
