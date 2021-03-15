import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTrouvezStagiairesComponent } from './section-trouvez-stagiaires.component';

describe('SectionTrouvezStagiairesComponent', () => {
  let component: SectionTrouvezStagiairesComponent;
  let fixture: ComponentFixture<SectionTrouvezStagiairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTrouvezStagiairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTrouvezStagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
