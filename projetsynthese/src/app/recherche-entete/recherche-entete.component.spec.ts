import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEnteteComponent } from './recherche-entete.component';

describe('RechercheEnteteComponent', () => {
  let component: RechercheEnteteComponent;
  let fixture: ComponentFixture<RechercheEnteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheEnteteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
