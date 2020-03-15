import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMydashboardComponent } from './dashboard-mydashboard.component';

describe('DashboardMydashboardComponent', () => {
  let component: DashboardMydashboardComponent;
  let fixture: ComponentFixture<DashboardMydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
