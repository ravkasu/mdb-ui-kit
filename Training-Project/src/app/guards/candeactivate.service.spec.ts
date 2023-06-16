import { TestBed } from '@angular/core/testing';

import { CandeactivateService } from './candeactivate.service';

describe('CandeactivateService', () => {
  let service: CandeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
