import { TestBed, async, inject } from '@angular/core/testing';

import { AuthtGuard } from './autht.guard';

describe('AuthtGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthtGuard]
    });
  });

  it('should ...', inject([AuthtGuard], (guard: AuthtGuard) => {
    expect(guard).toBeTruthy();
  }));
});
