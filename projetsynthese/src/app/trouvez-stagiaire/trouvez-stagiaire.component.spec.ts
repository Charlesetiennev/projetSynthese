import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouvezStagiaireComponent } from './trouvez-stagiaire.component';

describe('TrouvezStagiaireComponent', () => {
  let component: TrouvezStagiaireComponent;
  let fixture: ComponentFixture<TrouvezStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouvezStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouvezStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
