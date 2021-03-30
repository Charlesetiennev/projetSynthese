import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDemandeStageAdmninistrationComponent } from './formulaire-demande-stage-admninistration.component';

describe('FormulaireDemandeStageAdmninistrationComponent', () => {
  let component: FormulaireDemandeStageAdmninistrationComponent;
  let fixture: ComponentFixture<FormulaireDemandeStageAdmninistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDemandeStageAdmninistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDemandeStageAdmninistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
