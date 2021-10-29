import { TestBed } from '@angular/core/testing';

import { YourGuard } from './your.guard';

describe('YourGuard', () => {
  let guard: YourGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(YourGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
