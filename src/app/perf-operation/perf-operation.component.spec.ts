import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfOperationComponent } from './perf-operation.component';

describe('PerfOperationComponent', () => {
  let component: PerfOperationComponent;
  let fixture: ComponentFixture<PerfOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
