import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerService } from '../../services/seller.service';
import { Router } from '@angular/router';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      providers: [SellerService, Router],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", () => {

    it('sellerUI should create', () => {
      expect(component).toBeTruthy();
    });

  })

  describe("functional", () => {

    it('sellerUI Initialize the form', () => {
      const formValues = {
        sellerName: '',
        password: '',
        phoneNumber: '',
        address: '',
        sellerEmail: ''
      };
      expect(component.registrationForm.value).toEqual(formValues);
    });
  })

  describe('exception', () => {
    it('sellerUI should invalidate the form when empty', () => {
      component.registrationForm.controls['sellerName'].setValue('');
      component.registrationForm.controls['password'].setValue('');

      expect(component.registrationForm.valid).toBeFalsy();
    });

    it('sellerUI should validate the form ', () => {
      component.registrationForm.controls['sellerName'].setValue('seller01');
      component.registrationForm.controls['password'].setValue('seller01');
      component.registrationForm.controls['phoneNumber'].setValue('9966885577');
      component.registrationForm.controls['address'].setValue('bangalore');
      component.registrationForm.controls['sellerEmail'].setValue('seller01@test.com');

      expect(component.registrationForm.valid).toBeTruthy();
    });

    it('sellerUI should validate the sellerName required property', () => {
      const sellerName = component.registrationForm.controls['sellerName'];
      expect(sellerName.valid).toBeFalsy();
      sellerName.setValue('');
      expect(sellerName.hasError('required')).toBeTruthy();
    });

    it('sellerUI should validate the sellerName min-length property', () => {
      const sellerName = component.registrationForm.controls['sellerName'];
      expect(sellerName.valid).toBeFalsy();
      sellerName.setValue('c');
      expect(sellerName.hasError('minlength')).toBeTruthy();
      sellerName.setValue('seller01');
      expect(sellerName.hasError('minlength')).toBeFalsy();
    });

    it('sellerUI should validate the sellerName max-length property', () => {
      const sellerName = component.registrationForm.controls['sellerName'];
      expect(sellerName.valid).toBeFalsy();
      sellerName.setValue('sellertomervipsellertomervipsellertomervipsellertomervipsellertomervipsellertomervipsellertomervipsellertomervipsellertomervipsellertomervip');
      expect(sellerName.hasError('maxlength')).toBeTruthy();
      sellerName.setValue('seller01');
      expect(sellerName.hasError('maxlength')).toBeFalsy();
    });

    it('sellerUI should validate the sellerName', () => {
      const sellerName = component.registrationForm.controls['sellerName'];
      expect(sellerName.valid).toBeFalsy();
      sellerName.setValue('seller02');
      expect(sellerName.hasError('required')).toBeFalsy();
      expect(sellerName.hasError('minLength')).toBeFalsy();
      expect(sellerName.hasError('maxLength')).toBeFalsy();
      expect(sellerName.valid).toBeTruthy();
    });



    it('sellerUI should validate the password required property', () => {
      const password = component.registrationForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('');
      expect(password.hasError('required')).toBeTruthy();
    });

    it('sellerUI should validate the password min-length property', () => {
      const password = component.registrationForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('c');
      expect(password.hasError('minlength')).toBeTruthy();
      password.setValue('seller01');
      expect(password.hasError('minlength')).toBeFalsy();
    });

    it('sellerUI should validate the password max-length property', () => {
      const password = component.registrationForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('sellerpasswordsellerpasswordsellerpasswordsellerpasswordsellerpasswordsellerpasswordsellerpasswordsellerpasswordsellerpasswordsellerpassword');
      expect(password.hasError('maxlength')).toBeTruthy();
      password.setValue('seller01');
      expect(password.hasError('maxlength')).toBeFalsy();
    });

    it('sellerUI should validate the password', () => {
      const password = component.registrationForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('seller02');
      expect(password.hasError('required')).toBeFalsy();
      expect(password.hasError('minLength')).toBeFalsy();
      expect(password.hasError('maxLength')).toBeFalsy();
      expect(password.valid).toBeTruthy();
    });

  });
});
