import { TestBed } from '@angular/core/testing';

import { Score2Service } from './score2.service';

describe('Score2Service', () => {
  let service: Score2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Score2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
