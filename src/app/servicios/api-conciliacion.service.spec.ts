import { TestBed } from '@angular/core/testing';

import { ApiConciliacionService } from './api-conciliacion.service';

describe('ApiConciliacionService', () => {
  let service: ApiConciliacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConciliacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
