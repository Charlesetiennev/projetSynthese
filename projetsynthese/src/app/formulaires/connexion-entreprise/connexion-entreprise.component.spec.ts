import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConnexionEntrepriseComponent } from './connexion-entreprise.component';

describe('ConnexionEntrepriseComponent', () => {
  let component: ConnexionEntrepriseComponent;
  let fixture: ComponentFixture<ConnexionEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ConnexionEntrepriseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
