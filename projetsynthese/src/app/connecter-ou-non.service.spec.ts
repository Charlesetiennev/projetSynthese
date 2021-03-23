import { TestBed } from '@angular/core/testing';

import { ConnecterOuNonService } from './connecter-ou-non.service';

describe('ConnecterOuNonService', () => {
  let service: ConnecterOuNonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnecterOuNonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
