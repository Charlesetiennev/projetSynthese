import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTrouvezStageComponent } from './section-trouvez-stage.component';

describe('SectionTrouvezStageComponent', () => {
  let component: SectionTrouvezStageComponent;
  let fixture: ComponentFixture<SectionTrouvezStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTrouvezStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTrouvezStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
