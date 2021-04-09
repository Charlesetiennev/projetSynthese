import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { DemandeStageAccepterPipe } from '../../pipes/demande-stage-accepter.pipe';
import { TrouvezStagiaireComponent } from './trouvez-stagiaire.component';

describe('TrouvezStagiaireComponent', () => {
  let component: TrouvezStagiaireComponent;
  let fixture: ComponentFixture<TrouvezStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiProjetSyntheseService],
      declarations: [TrouvezStagiaireComponent, DemandeStageAccepterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouvezStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("Vérifiez qu'au clic , la valeur de la variable qui affiche l'entièreté des demandes passe a true.", async () => {
    let bouton = fixture.debugElement.nativeElement.querySelector(
      '#chargerPlusDemande'
    );
    bouton.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.afficher).toBeTrue;
    });
  });
  it("Vérifiez qu'au chargement de la page, seulement les 5 premières demandes sont affichées.", async () => {
    expect(component.afficher).toBeFalse;
  });
});
