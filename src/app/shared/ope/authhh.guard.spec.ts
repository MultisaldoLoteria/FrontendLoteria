import { TestBed, async, inject } from '@angular/core/testing';

import { AuthhhGuard } from './authhh.guard';

describe('AuthhhGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthhhGuard]
    });
  });

  it('should ...', inject([AuthhhGuard], (guard: AuthhhGuard) => {
    expect(guard).toBeTruthy();
  }));
});
