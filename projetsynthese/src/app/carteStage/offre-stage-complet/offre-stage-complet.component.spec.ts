import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreStageCompletComponent } from './offre-stage-complet.component';

describe('OffreStageCompletComponent', () => {
  let component: OffreStageCompletComponent;
  let fixture: ComponentFixture<OffreStageCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreStageCompletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreStageCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
