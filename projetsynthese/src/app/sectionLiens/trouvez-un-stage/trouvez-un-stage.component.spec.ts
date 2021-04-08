import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { OffreStageAccepterPipe } from '../../pipes/offre-stage-accepter.pipe';
import { TrouvezUnStageComponent } from './trouvez-un-stage.component';
import { By } from '@angular/platform-browser';

describe('TrouvezUnStageComponent', () => {
  let component: TrouvezUnStageComponent;
  let fixture: ComponentFixture<TrouvezUnStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiProjetSyntheseService],
      declarations: [TrouvezUnStageComponent, OffreStageAccepterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouvezUnStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("Verifie l'attribu routerLink pour la bonne redirection", async () => {
    let href = fixture.debugElement
      .query(By.css('#lienTrouvezStage'))
      .nativeElement.getAttribute('routerLink');
    expect(href).toEqual('/trouvezStage');
  });

  it("Verifie l'attribu routerLink pour la bonne redirection", async () => {
    let href = fixture.debugElement
      .query(By.css('#lienTrouvezStage'))
      .nativeElement.getAttribute('routerLink');
    expect(href).not.toEqual('/trouverStage');
  });
});
