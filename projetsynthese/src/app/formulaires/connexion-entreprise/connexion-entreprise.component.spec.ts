import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionEntrepriseComponent } from './connexion-entreprise.component';

describe('ConnexionEntrepriseComponent', () => {
  let component: ConnexionEntrepriseComponent;
  let fixture: ComponentFixture<ConnexionEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
