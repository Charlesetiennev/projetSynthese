// connexion-inscription.spec.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionInscriptionComponent } from './connexion-inscription.component';

describe('ConnexionInscriptionComponent', () => {
  let component: ConnexionInscriptionComponent;
  let fixture: ComponentFixture<ConnexionInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnexionInscriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("S'assurez que le composant de connexion entreprise n'est pas ouvert au départ", () => {
    expect(component.formulaireDiv.entreprise).toBeFalse();
  });
  it("S'assurez que le composant de connexion stagiaire n'est pas ouvert au départ", () => {
    expect(component.formulaireDiv.stagiaire).toBeFalse();
  });
});
