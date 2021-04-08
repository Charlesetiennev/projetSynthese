import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiProjetSyntheseService } from '../../../api-projet-synthese.service';
import { FormulaireDemandeStageAdmninistrationComponent } from './formulaire-demande-stage-admninistration.component';

describe('FormulaireDemandeStageAdmninistrationComponent', () => {
  let component: FormulaireDemandeStageAdmninistrationComponent;
  let fixture: ComponentFixture<FormulaireDemandeStageAdmninistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [ApiProjetSyntheseService],
      declarations: [FormulaireDemandeStageAdmninistrationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      FormulaireDemandeStageAdmninistrationComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
