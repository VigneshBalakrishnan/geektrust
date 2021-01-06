import { TestBed } from '@angular/core/testing';

import { FalconeServiceService } from './falcone-service.service';

describe('FalconeServiceService', () => {
  let service: FalconeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FalconeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
