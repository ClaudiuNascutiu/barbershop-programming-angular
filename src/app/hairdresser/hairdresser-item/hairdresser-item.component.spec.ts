import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairdresserItemComponent } from './hairdresser-item.component';

describe('HairdresserItemComponent', () => {
  let component: HairdresserItemComponent;
  let fixture: ComponentFixture<HairdresserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairdresserItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairdresserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
