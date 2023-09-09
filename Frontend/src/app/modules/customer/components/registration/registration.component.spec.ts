import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../servcies/customer.service';
import { Router } from '@angular/router';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      providers: [CustomerService, Router],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", ()=>{

  it('customerUI should create', () => {
    expect(component).toBeTruthy();
  });
});
  
  
describe("functional", ()=>{
  it('customerUI Initialize the form', () => {
    const formValues = {
      username: '',
      password: '',
      phoneNumber: '',
      address: '',
      email: ''
    };
    expect(component.registrationForm.value).toEqual(formValues);
  });
});

  describe('exception', () => {
    it('customerUI should invalidate the form when empty', () => {
      component.registrationForm.controls['username'].setValue('');
      component.registrationForm.controls['password'].setValue('');
      component.registrationForm.controls['phoneNumber'].setValue('');
      component.registrationForm.controls['address'].setValue('');
      component.registrationForm.controls['email'].setValue('');

      expect(component.registrationForm.valid).toBeFalsy();
    });

    it('customerUI should validate the form ', () => {
      component.registrationForm.controls['username'].setValue('cus01');
      component.registrationForm.controls['password'].setValue('cus01');
      component.registrationForm.controls['phoneNumber'].setValue('8855447788');
      component.registrationForm.controls['address'].setValue('pune');
      component.registrationForm.controls['email'].setValue('cus01@gmail.com');

      expect(component.registrationForm.valid).toBeTruthy();
    });

    it('customerUI should validate the username required property', () => {
      const username = component.registrationForm.controls['username'];
      expect(username.valid).toBeFalsy();
      username.setValue('');
      expect(username.hasError('required')).toBeTruthy();
    });

    it('customerUI should validate the username min-length property', () => {
      const username = component.registrationForm.controls['username'];
      expect(username.valid).toBeFalsy();
      username.setValue('c');
      expect(username.hasError('minlength')).toBeTruthy();
      username.setValue('cus01');
      expect(username.hasError('minlength')).toBeFalsy();
    });

    it('customerUI should validate the username max-length property', () => {
      const username = component.registrationForm.controls['username'];
      expect(username.valid).toBeFalsy();
      username.setValue('customervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervip');
      expect(username.hasError('maxlength')).toBeTruthy();
      username.setValue('cus01');
      expect(username.hasError('maxlength')).toBeFalsy();
    });

    it('customerUI should validate the username', () => {
      const username = component.registrationForm.controls['username'];
      expect(username.valid).toBeFalsy();
      username.setValue('cus02');
      expect(username.hasError('required')).toBeFalsy();
      expect(username.hasError('minLength')).toBeFalsy();
      expect(username.hasError('maxLength')).toBeFalsy();
      expect(username.valid).toBeTruthy();
    });

    it('customerUI should validate the password required property', () => {
      const password = component.registrationForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('');
      expect(password.hasError('required')).toBeTruthy();
    });

    it('customerUI should validate the password min-length property', () => {
      const password = component.registrationForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('c');
      expect(password.hasError('minlength')).toBeTruthy();
      password.setValue('cus01');
      expect(password.hasError('minlength')).toBeFalsy();
    });

    it('customerUI should validate the password max-length property', () => {
      const password = component.registrationForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('customervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervipcustomervip');
      expect(password.hasError('maxlength')).toBeTruthy();
      password.setValue('cus01');
      expect(password.hasError('maxlength')).toBeFalsy();
    });

    it('customerUI should validate the password', () => {
      const password = component.registrationForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('cus02');
      expect(password.hasError('required')).toBeFalsy();
      expect(password.hasError('minLength')).toBeFalsy();
      expect(password.hasError('maxLength')).toBeFalsy();
      expect(password.valid).toBeTruthy();
    });

  });

});
