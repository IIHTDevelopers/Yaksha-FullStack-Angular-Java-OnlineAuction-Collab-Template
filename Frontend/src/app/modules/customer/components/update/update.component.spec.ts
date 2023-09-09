import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { CustomerService } from '../../servcies/customer.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Customer } from '../../../../models/customer';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  const customer: Customer = {
    id: 123,
    username: "cus01",
    password: "cus01",
    email: "cus01@gmail.com",
    phoneNumber: 3322112233,
    address: "delhi"
  }
  let mockService = {
    findByPk: (id: string) => { return of(customer) }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      providers: [
        // {provide: CustomerService, useValue: mockService}, 
        Router
      ],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();


    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", () => {
    it('customerUI should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('exception', () => {
    it('customerUI should invalidate the form when empty', () => {
      component.updateForm.controls['username'].setValue('');
      component.updateForm.controls['password'].setValue('');
      component.updateForm.controls['phoneNumber'].setValue('');
      component.updateForm.controls['address'].setValue('');
      component.updateForm.controls['email'].setValue('');
      component.updateForm.controls['id'].setValue('123');

      expect(component.updateForm.valid).toBeFalsy();
    });

    it('customerUI should validate the form ', () => {
      component.updateForm.controls['username'].setValue('cus01');
      component.updateForm.controls['password'].setValue('cus01');
      component.updateForm.controls['phoneNumber'].setValue('8855447788');
      component.updateForm.controls['address'].setValue('pune');
      component.updateForm.controls['email'].setValue('cus01@gmail.com');
      component.updateForm.controls['id'].setValue('123');

      expect(component.updateForm.valid).toBeTruthy();
    });

    it('customerUI should validate the username required property', () => {
      const username = component.updateForm.controls['username'];
      expect(username.valid).toBeFalsy();
      username.setValue('');
      expect(username.hasError('required')).toBeTruthy();
    });

    it('customerUI should validate the username min-length property', () => {
      const username = component.updateForm.controls['username'];
      expect(username.valid).toBeFalsy();
      username.setValue('c');
      expect(username.hasError('minlength')).toBeTruthy();
      username.setValue('cus01');
      expect(username.hasError('minlength')).toBeFalsy();
    });

    it('customerUI should validate the username max-length property', () => {
      const username = component.updateForm.controls['username'];
      expect(username.valid).toBeFalsy();
      username.setValue('customervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervip');
      expect(username.hasError('maxlength')).toBeTruthy();
      username.setValue('cus01');
      expect(username.hasError('maxlength')).toBeFalsy();
    });

    it('customerUI should validate the username', () => {
      const username = component.updateForm.controls['username'];
      expect(username.valid).toBeFalsy();
      username.setValue('cus02');
      expect(username.hasError('required')).toBeFalsy();
      expect(username.hasError('minLength')).toBeFalsy();
      expect(username.hasError('maxLength')).toBeFalsy();
      expect(username.valid).toBeTruthy();
    });

    it('customerUI should validate the password required property', () => {
      const password = component.updateForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('');
      expect(password.hasError('required')).toBeTruthy();
    });

    it('customerUI should validate the password min-length property', () => {
      const password = component.updateForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('c');
      expect(password.hasError('minlength')).toBeTruthy();
      password.setValue('cus01');
      expect(password.hasError('minlength')).toBeFalsy();
    });

    it('customerUI should validate the password max-length property', () => {
      const password = component.updateForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('customervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervip');
      expect(password.hasError('maxlength')).toBeTruthy();
      password.setValue('cus01');
      expect(password.hasError('maxlength')).toBeFalsy();
    });

    it('customerUI should validate the password', () => {
      const password = component.updateForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('cus02');
      expect(password.hasError('required')).toBeFalsy();
      expect(password.hasError('minLength')).toBeFalsy();
      expect(password.hasError('maxLength')).toBeFalsy();
      expect(password.valid).toBeTruthy();
    });

  });

});


