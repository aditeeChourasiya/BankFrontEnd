import { TestBed } from '@angular/core/testing';

import { Bankv2Service } from './bankv2.service';

describe('Bankv2Service', () => {
  let service: Bankv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bankv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
