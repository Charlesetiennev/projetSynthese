import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreStageCompleteComponent } from './offre-stage-complete.component';

describe('OffreStageCompleteComponent', () => {
  let component: OffreStageCompleteComponent;
  let fixture: ComponentFixture<OffreStageCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreStageCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreStageCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
