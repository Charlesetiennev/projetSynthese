import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionStagiaireComponent } from './connexion-stagiaire.component';

describe('ConnexionStagiaireComponent', () => {
  let component: ConnexionStagiaireComponent;
  let fixture: ComponentFixture<ConnexionStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
