import { TestBed } from '@angular/core/testing';

import { EmpsuppService } from './empsupp.service';

describe('EmpsuppService', () => {
  let service: EmpsuppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpsuppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
