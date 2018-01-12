import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitCounterComponent } from './digit-counter.component';

describe('DigitCounterComponent', () => {
  let component: DigitCounterComponent;
  let fixture: ComponentFixture<DigitCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
