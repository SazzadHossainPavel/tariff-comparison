import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionInputComponent } from './consumption-input.component';

describe('ConsumptionInputComponent', () => {
  let component: ConsumptionInputComponent;
  let fixture: ComponentFixture<ConsumptionInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumptionInputComponent]
    });
    fixture = TestBed.createComponent(ConsumptionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
