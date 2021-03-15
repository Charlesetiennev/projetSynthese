import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturStagiaireComponent } from './futur-stagiaire.component';

describe('FuturStagiaireComponent', () => {
  let component: FuturStagiaireComponent;
  let fixture: ComponentFixture<FuturStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
