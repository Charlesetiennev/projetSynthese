import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiProjetSyntheseService } from './api-projet-synthese.service';

describe('ApiProjetSyntheseService', () => {
  let service: ApiProjetSyntheseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ApiProjetSyntheseService);
  });
});
