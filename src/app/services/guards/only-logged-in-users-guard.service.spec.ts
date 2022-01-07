import { TestBed } from '@angular/core/testing';

import { OnlyLoggedInUsersGuardService } from './only-logged-in-users-guard.service';

describe('OnlyLoggedInUsersGuardService', () => {
  let service: OnlyLoggedInUsersGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyLoggedInUsersGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
