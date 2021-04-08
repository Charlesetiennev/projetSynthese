import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConnexionStagiaireComponent } from './connexion-stagiaire.component';

describe('ConnexionStagiaireComponent', () => {
  let component: ConnexionStagiaireComponent;
  let fixture: ComponentFixture<ConnexionStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ConnexionStagiaireComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("Verifie que la status de connexion et la redirection ne se fait pas si le formulaire n'est pas encore valide", async () => {
    let boutonConnexion = fixture.debugElement.nativeElement.querySelector(
      'button'
    );
    boutonConnexion.click();
    fixture.whenStable().then(() => {
      expect(component.env.statusDeConnexion).toBe('');
    });
  });
  it("Verifie que la status de connexion et la redirection ne se fait pas si le formulaire n'est pas encore valide", async () => {
    let boutonConnexion = fixture.debugElement.nativeElement.querySelector(
      'button'
    );
    boutonConnexion.click();
    fixture.whenStable().then(() => {
      expect(component.env.statusDeConnexion).not.toBe('stagiaire');
    });
  });
});
