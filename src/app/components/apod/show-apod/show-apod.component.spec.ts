import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApodComponent } from './show-apod.component';

describe('ShowApodComponent', () => {
  let component: ShowApodComponent;
  let fixture: ComponentFixture<ShowApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowApodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
