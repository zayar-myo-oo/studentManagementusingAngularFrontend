import { TestBed } from '@angular/core/testing';

import { LoginInOutService } from './login-in-out.service';

describe('LoginInOutService', () => {
  let service: LoginInOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginInOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
