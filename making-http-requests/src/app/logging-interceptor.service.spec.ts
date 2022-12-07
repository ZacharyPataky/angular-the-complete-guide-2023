import { TestBed } from '@angular/core/testing';

import { LoggingInterceptorService } from './logging-interceptor.service';

describe('LoggingInterceptorService', () => {
  let service: LoggingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
