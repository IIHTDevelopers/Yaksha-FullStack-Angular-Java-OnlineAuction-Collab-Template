import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCategoryComponent } from './product-by-category.component';

describe('CustomerUI_ProductByCategoryComponent', () => {
  let component: ProductByCategoryComponent;
  let fixture: ComponentFixture<ProductByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  describe("boundary", ()=>{
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
});
