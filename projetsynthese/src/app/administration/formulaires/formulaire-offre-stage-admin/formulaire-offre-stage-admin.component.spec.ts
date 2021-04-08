import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiProjetSyntheseService } from '../../../api-projet-synthese.service';
import { FormulaireOffreStageAdminComponent } from './formulaire-offre-stage-admin.component';

describe('FormulaireOffreStageAdminComponent', () => {
  let component: FormulaireOffreStageAdminComponent;
  let fixture: ComponentFixture<FormulaireOffreStageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [ApiProjetSyntheseService],
      declarations: [FormulaireOffreStageAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireOffreStageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
