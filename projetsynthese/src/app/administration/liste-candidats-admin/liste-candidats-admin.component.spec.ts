import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { ListeCandidatsAdminComponent } from './liste-candidats-admin.component';

describe('ListeCandidatsAdminComponent', () => {
  let component: ListeCandidatsAdminComponent;
  let fixture: ComponentFixture<ListeCandidatsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiProjetSyntheseService],
      declarations: [ListeCandidatsAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCandidatsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
