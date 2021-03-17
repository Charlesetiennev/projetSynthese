import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeStageAdminComponent } from './demande-stage-admin.component';

describe('DemandeStageAdminComponent', () => {
  let component: DemandeStageAdminComponent;
  let fixture: ComponentFixture<DemandeStageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeStageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeStageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
