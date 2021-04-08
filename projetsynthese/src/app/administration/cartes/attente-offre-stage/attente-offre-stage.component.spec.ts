import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteOffreStageComponent } from './attente-offre-stage.component';

describe('AttenteOffreStageComponent', () => {
  let component: AttenteOffreStageComponent;
  let fixture: ComponentFixture<AttenteOffreStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttenteOffreStageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
