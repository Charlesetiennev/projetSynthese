import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeStageDetailComponent } from './demande-stage-detail.component';

describe('DemandeStageDetailComponent', () => {
  let component: DemandeStageDetailComponent;
  let fixture: ComponentFixture<DemandeStageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeStageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeStageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
