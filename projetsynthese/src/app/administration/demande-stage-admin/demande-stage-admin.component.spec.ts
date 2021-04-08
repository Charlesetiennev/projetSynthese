import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { DemandeStageAdminComponent } from './demande-stage-admin.component';

describe('DemandeStageAdminComponent', () => {
  let component: DemandeStageAdminComponent;
  let fixture: ComponentFixture<DemandeStageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiProjetSyntheseService],
      declarations: [DemandeStageAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeStageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
