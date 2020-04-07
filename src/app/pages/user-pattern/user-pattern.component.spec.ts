import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPatternComponent } from './user-pattern.component';

describe('UserPatternComponent', () => {
  let component: UserPatternComponent;
  let fixture: ComponentFixture<UserPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
