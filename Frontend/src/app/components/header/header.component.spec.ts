import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("boundary", ()=>{
    it('customerUI should create', () => {
    expect(component).toBeTruthy();
  });
});

describe("functional", ()=>{
  it(`customerUI should have as title 'Online Auction System'`, () => {
    // const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.componentInstance;
    expect(header.title).toEqual('Online Auction System');
  });

  it('customerUI should render title', () => {
    // const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header>h2')?.textContent).toContain('Online Auction System');
  });
});

});
