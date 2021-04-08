import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniOffreStageComponent } from './mini-offre-stage.component';

describe('MiniOffreStageComponent', () => {
  let component: MiniOffreStageComponent;
  let fixture: ComponentFixture<MiniOffreStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniOffreStageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
