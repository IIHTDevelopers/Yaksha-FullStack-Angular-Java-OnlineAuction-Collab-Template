import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", ()=>{
    it('customerUI should create the app', () => {
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it('customerUI should render header', () => {
      const { debugElement } = fixture;
      const header = debugElement.query(By.css('app-header'));
      expect(header).toBeTruthy();
    });

    it('customerUI should render footer', () => {
      const { debugElement } = fixture;
      const footer = debugElement.query(By.css('app-footer'));
      expect(footer).toBeTruthy();
    });

  });
});
