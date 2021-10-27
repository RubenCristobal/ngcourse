import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateApodComponent } from './date-apod.component';

describe('DateApodComponent', () => {
  let component: DateApodComponent;
  let fixture: ComponentFixture<DateApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateApodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
