import { TestBed } from '@angular/core/testing';

import { CronaService } from './crona.service';

describe('CronaService', () => {
  let service: CronaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
