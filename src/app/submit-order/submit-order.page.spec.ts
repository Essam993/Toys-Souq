import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOrderPage } from './submit-order.page';

describe('SubmitOrderPage', () => {
  let component: SubmitOrderPage;
  let fixture: ComponentFixture<SubmitOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
