import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductComponent } from './new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('NewProductComponent', () => {
  let component: NewProductComponent;
  let fixture: ComponentFixture<NewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewProductComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", () => {
    it('sellerUI should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
