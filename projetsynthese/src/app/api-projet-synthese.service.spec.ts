import { TestBed } from '@angular/core/testing';

import { ApiProjetSyntheseService } from './api-projet-synthese.service';

describe('ApiProjetSyntheseService', () => {
  let service: ApiProjetSyntheseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProjetSyntheseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
