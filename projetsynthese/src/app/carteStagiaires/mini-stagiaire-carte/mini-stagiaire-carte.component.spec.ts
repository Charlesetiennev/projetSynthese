import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniStagiaireCarteComponent } from './mini-stagiaire-carte.component';

describe('MiniStagiaireCarteComponent', () => {
  let component: MiniStagiaireCarteComponent;
  let fixture: ComponentFixture<MiniStagiaireCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniStagiaireCarteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniStagiaireCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
