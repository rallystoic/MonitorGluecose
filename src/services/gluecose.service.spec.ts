import { TestBed } from '@angular/core/testing';

import { GluecoseService } from './gluecose.service';

describe('GluecoseService', () => {
  let service: GluecoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GluecoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
