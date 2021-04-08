import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiProjetSyntheseService } from '../../../api-projet-synthese.service';
import { DemandeStageDetailComponent } from './demande-stage-detail.component';

describe('DemandeStageDetailComponent', () => {
  let component: DemandeStageDetailComponent;
  let fixture: ComponentFixture<DemandeStageDetailComponent>;
  let route: ActivatedRoute;
  let apiProjetSyntheseService: ApiProjetSyntheseService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandeStageDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeStageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
