import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetireStaffComponent } from './retire-staff.component';

describe('RetireStaffComponent', () => {
  let component: RetireStaffComponent;
  let fixture: ComponentFixture<RetireStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetireStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetireStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
