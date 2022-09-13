import { TestBed } from '@angular/core/testing';

import { RseIdeaService } from './rse-idea.service';

describe('RseIdeaService', () => {
  let service: RseIdeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RseIdeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
