import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMapComponent } from './performance-map.component';

describe('PerformanceMapComponent', () => {
  let component: PerformanceMapComponent;
  let fixture: ComponentFixture<PerformanceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
