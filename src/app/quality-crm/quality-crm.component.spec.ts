import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityCrmComponent } from './quality-crm.component';

describe('QualityCrmComponent', () => {
  let component: QualityCrmComponent;
  let fixture: ComponentFixture<QualityCrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityCrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
