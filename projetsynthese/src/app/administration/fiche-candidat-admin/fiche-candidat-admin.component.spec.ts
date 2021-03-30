import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCandidatAdminComponent } from './fiche-candidat-admin.component';

describe('FicheCandidatAdminComponent', () => {
  let component: FicheCandidatAdminComponent;
  let fixture: ComponentFixture<FicheCandidatAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheCandidatAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheCandidatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
