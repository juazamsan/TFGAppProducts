import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCartComponent } from './pay-cart.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('PayCartComponent', () => {
  let component: PayCartComponent;
  let fixture: ComponentFixture<PayCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCartComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
