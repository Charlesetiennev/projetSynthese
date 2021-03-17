import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireStagiaireComponent } from './formulaire-stagiaire.component';

describe('FormulaireStagiaireComponent', () => {
  let component: FormulaireStagiaireComponent;
  let fixture: ComponentFixture<FormulaireStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
