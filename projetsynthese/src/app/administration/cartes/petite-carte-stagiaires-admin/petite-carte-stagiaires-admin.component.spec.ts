import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiteCarteStagiairesAdminComponent } from './petite-carte-stagiaires-admin.component';

describe('PetiteCarteStagiairesAdminComponent', () => {
  let component: PetiteCarteStagiairesAdminComponent;
  let fixture: ComponentFixture<PetiteCarteStagiairesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetiteCarteStagiairesAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiteCarteStagiairesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
