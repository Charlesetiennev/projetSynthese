// trouvez-stage.spec.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { TrouvezStageComponent } from './trouvez-stage.component';

describe('TrouvezStageComponent', () => {
  let component: TrouvezStageComponent;
  let fixture: ComponentFixture<TrouvezStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiProjetSyntheseService],
      declarations: [TrouvezStageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouvezStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Titre devrait envoyer Offres de stage', () => {
    expect(component.titre).not.toBe('Offre de stages');
  });
  it('Titre devrait envoyer Offres de stage', () => {
    expect(component.titre).toBe('Offres de stage');
  });
});
