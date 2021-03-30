import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeStageCompletComponent } from './demande-stage-complet.component';

describe('DemandeStageCompletComponent', () => {
  let component: DemandeStageCompletComponent;
  let fixture: ComponentFixture<DemandeStageCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeStageCompletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeStageCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
