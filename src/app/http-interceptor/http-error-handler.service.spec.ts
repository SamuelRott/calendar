import { TestBed } from '@angular/core/testing';

import { HttpErrorInterceptor } from './http-error-handler.service';

describe('HttpErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpErrorInterceptor],
  }));

  it('should be created', () => {
    const service: HttpErrorInterceptor = TestBed.get(HttpErrorInterceptor);
    expect(service).toBeTruthy();
  });
});
