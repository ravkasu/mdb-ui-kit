import { TestBed } from '@angular/core/testing';

import { CanactivateloginService } from './canactivatelogin.service';

describe('CanactivateloginService', () => {
  let service: CanactivateloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactivateloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
