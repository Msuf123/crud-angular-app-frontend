import { TestBed } from '@angular/core/testing';

import { AvailableUsernameService } from './available-username.service';

describe('AvailableUsernameService', () => {
  let service: AvailableUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
