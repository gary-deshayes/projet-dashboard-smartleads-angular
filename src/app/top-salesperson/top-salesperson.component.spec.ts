import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSalespersonComponent } from './top-salesperson.component';

describe('TopSalespersonComponent', () => {
  let component: TopSalespersonComponent;
  let fixture: ComponentFixture<TopSalespersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSalespersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSalespersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
