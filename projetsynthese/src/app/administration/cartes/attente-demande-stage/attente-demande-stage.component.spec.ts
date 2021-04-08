import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteDemandeStageComponent } from './attente-demande-stage.component';

describe('AttenteDemandeStageComponent', () => {
  let component: AttenteDemandeStageComponent;
  let fixture: ComponentFixture<AttenteDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttenteDemandeStageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
