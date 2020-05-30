import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductComponent } from './list-product.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ProductService} from '../service/product.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedDataService} from '../service/sharedData.service';

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let fixture: ComponentFixture<ListProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductComponent ],
      imports :[RouterTestingModule, HttpClientModule],
      providers: [ProductService, SharedDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
