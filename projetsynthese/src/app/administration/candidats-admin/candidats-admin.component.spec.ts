import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsAdminComponent } from './candidats-admin.component';

describe('CandidatsAdminComponent', () => {
  let component: CandidatsAdminComponent;
  let fixture: ComponentFixture<CandidatsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidatsAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
