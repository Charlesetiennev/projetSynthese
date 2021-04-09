import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { FormulaireStagiaireComponent } from './formulaire-stagiaire.component';

describe('FormulaireStagiaireComponent', () => {
  let component: FormulaireStagiaireComponent;
  let fixture: ComponentFixture<FormulaireStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [ApiProjetSyntheseService],
      declarations: [FormulaireStagiaireComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Le formulaire est invalide.', async () => {
    component.stagiaireAjoutForm.controls['prenom'].setValue('12');
    component.stagiaireAjoutForm.controls['nom'].setValue('!');
    component.stagiaireAjoutForm.controls['courriel'].setValue('cliase');
    component.stagiaireAjoutForm.controls['telephone'].setValue('!--');
    component.stagiaireAjoutForm.controls['ville'].setValue('1Daew');
    component.stagiaireAjoutForm.controls['competences'].setValue('aucune');
    component.stagiaireAjoutForm.controls['messageMotivation'].setValue(
      'Moyen'
    );
    component.stagiaireAjoutForm.controls['motDePasse'].setValue('123');
    expect(component.stagiaireAjoutForm.valid).toBeFalsy();
  });
  it('Le formulaire est valide.', async () => {
    component.stagiaireAjoutForm.controls['prenom'].setValue('Eric');
    component.stagiaireAjoutForm.controls['nom'].setValue('Balapa');
    component.stagiaireAjoutForm.controls['courriel'].setValue(
      'simon@hotmail.ca'
    );
    component.stagiaireAjoutForm.controls['telephone'].setValue('8197019322');
    component.stagiaireAjoutForm.controls['ville'].setValue('Valdor');
    component.stagiaireAjoutForm.controls['competences'].setValue(
      'Plusieurs qui ne pourrais entrer en 20 caracteres'
    );
    component.stagiaireAjoutForm.controls['messageMotivation'].setValue(
      'Tres motiver aujourdhui et cest tres bien'
    );
    component.stagiaireAjoutForm.controls['motDePasse'].setValue('asdfgh');
    expect(component.stagiaireAjoutForm.valid).toBeTruthy;
  });
});
