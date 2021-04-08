import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { SectionTrouvezStagiairesComponent } from './section-trouvez-stagiaires.component';

describe('SectionTrouvezStagiairesComponent', () => {
  let component: SectionTrouvezStagiairesComponent;
  let fixture: ComponentFixture<SectionTrouvezStagiairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiProjetSyntheseService],
      declarations: [SectionTrouvezStagiairesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTrouvezStagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
