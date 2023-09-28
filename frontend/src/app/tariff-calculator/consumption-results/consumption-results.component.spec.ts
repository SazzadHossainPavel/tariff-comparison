import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionResultsComponent } from './consumption-results.component';

describe('ConsumptionResultsComponent', () => {
  let component: ConsumptionResultsComponent;
  let fixture: ComponentFixture<ConsumptionResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumptionResultsComponent]
    });
    fixture = TestBed.createComponent(ConsumptionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
