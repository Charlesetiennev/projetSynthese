import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireMoyenComponent } from './stagiaire-moyen.component';

describe('StagiaireMoyenComponent', () => {
  let component: StagiaireMoyenComponent;
  let fixture: ComponentFixture<StagiaireMoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagiaireMoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiaireMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
