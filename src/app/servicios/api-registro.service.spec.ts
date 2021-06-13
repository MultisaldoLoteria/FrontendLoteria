import { TestBed } from '@angular/core/testing';

import { ApiRegistroService } from './api-registro.service';

describe('ApiRegistroService', () => {
  let service: ApiRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
