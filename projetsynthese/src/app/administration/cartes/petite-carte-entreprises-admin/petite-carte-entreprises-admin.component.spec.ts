import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiteCarteEntreprisesAdminComponent } from './petite-carte-entreprises-admin.component';

describe('PetiteCarteEntreprisesAdminComponent', () => {
  let component: PetiteCarteEntreprisesAdminComponent;
  let fixture: ComponentFixture<PetiteCarteEntreprisesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetiteCarteEntreprisesAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiteCarteEntreprisesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
