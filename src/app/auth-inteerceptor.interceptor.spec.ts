import { TestBed } from '@angular/core/testing';

import { AuthInteerceptorInterceptor } from './auth-inteerceptor.interceptor';

describe('AuthInteerceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInteerceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInteerceptorInterceptor = TestBed.inject(AuthInteerceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
