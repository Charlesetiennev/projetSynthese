import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiProjetSyntheseService } from '../api-projet-synthese.service';
import { TableauSecteursActiviteComponent } from './tableau-secteurs-activite.component';

describe('TableauSecteursActiviteComponent', () => {
  let component: TableauSecteursActiviteComponent;
  let fixture: ComponentFixture<TableauSecteursActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiProjetSyntheseService],
      declarations: [TableauSecteursActiviteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauSecteursActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
