import { TestBed, inject } from '@angular/core/testing';

import { PlogService } from './plog.service';

describe('PlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlogService]
    });
  });

  it('should be created', inject([PlogService], (service: PlogService) => {
    expect(service).toBeTruthy();
  }));
});
