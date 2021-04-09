import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FicheCandidatAdminComponent } from './fiche-candidat-admin.component';
import { not } from '@angular/compiler/src/output/output_ast';

describe('FicheCandidatAdminComponent', () => {
  let component: FicheCandidatAdminComponent;
  let fixture: ComponentFixture<FicheCandidatAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([]),
      ],
      declarations: [FicheCandidatAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheCandidatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Ouverture du bouton de modification', async () => {
    expect(component.modification.valueOf).not.toBeTrue;
  });
  it("Vérifiez que le formulaire n'est pas affiché au départ.", async () => {
    expect(component.modification.valueOf).toBeFalse;
  });
});
