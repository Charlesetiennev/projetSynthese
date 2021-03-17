import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreStageAdminComponent } from './offre-stage-admin.component';

describe('OffreStageAdminComponent', () => {
  let component: OffreStageAdminComponent;
  let fixture: ComponentFixture<OffreStageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreStageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreStageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
