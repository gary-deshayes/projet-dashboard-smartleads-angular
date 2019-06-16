import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStatisticComponent } from './one-statistic.component';

describe('OneStatisticComponent', () => {
  let component: OneStatisticComponent;
  let fixture: ComponentFixture<OneStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
