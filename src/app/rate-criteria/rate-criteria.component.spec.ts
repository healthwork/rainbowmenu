import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCriteriaComponent } from './rate-criteria.component';

describe('RateCriteriaComponent', () => {
  let component: RateCriteriaComponent;
  let fixture: ComponentFixture<RateCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
