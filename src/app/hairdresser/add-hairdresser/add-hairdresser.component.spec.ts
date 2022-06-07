import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHairdresserComponent } from './add-hairdresser.component';

describe('AddHairdresserComponent', () => {
  let component: AddHairdresserComponent;
  let fixture: ComponentFixture<AddHairdresserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHairdresserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHairdresserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
