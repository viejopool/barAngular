import { TestBed } from '@angular/core/testing';

import { CoctelbdService } from './coctelbd.service';

describe('CoctelbdService', () => {
  let service: CoctelbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctelbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
