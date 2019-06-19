import { TestBed } from '@angular/core/testing';

import { ZipcodeServiceService } from './zipcode-service.service';

describe('ZipcodeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZipcodeServiceService = TestBed.get(ZipcodeServiceService);
    expect(service).toBeTruthy();
  });
});
