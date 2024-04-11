import { TestBed } from '@angular/core/testing';

import { GYMServiceService } from './gym-service.service';

describe('GYMServiceService', () => {
  let service: GYMServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GYMServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
