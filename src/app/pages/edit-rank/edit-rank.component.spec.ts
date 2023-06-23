import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRankComponent } from './edit-rank.component';

describe('EditRankComponent', () => {
  let component: EditRankComponent;
  let fixture: ComponentFixture<EditRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
