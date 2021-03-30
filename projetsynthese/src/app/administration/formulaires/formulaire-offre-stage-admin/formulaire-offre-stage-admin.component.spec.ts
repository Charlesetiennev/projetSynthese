import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireOffreStageAdminComponent } from './formulaire-offre-stage-admin.component';

describe('FormulaireOffreStageAdminComponent', () => {
  let component: FormulaireOffreStageAdminComponent;
  let fixture: ComponentFixture<FormulaireOffreStageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireOffreStageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireOffreStageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
