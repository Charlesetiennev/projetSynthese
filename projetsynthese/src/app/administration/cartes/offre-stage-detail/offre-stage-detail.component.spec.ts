import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreStageDetailComponent } from './offre-stage-detail.component';

describe('OffreStageDetailComponent', () => {
  let component: OffreStageDetailComponent;
  let fixture: ComponentFixture<OffreStageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreStageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreStageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
