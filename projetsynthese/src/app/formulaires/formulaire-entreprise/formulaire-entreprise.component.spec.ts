import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { FormulaireEntrepriseComponent } from './formulaire-entreprise.component';

describe('FormulaireEntrepriseComponent', () => {
  let component: FormulaireEntrepriseComponent;
  let fixture: ComponentFixture<FormulaireEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, , FormsModule, ReactiveFormsModule],
      providers: [ApiProjetSyntheseService],
      declarations: [FormulaireEntrepriseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
