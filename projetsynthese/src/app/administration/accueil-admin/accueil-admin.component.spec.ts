import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { AccueilAdminComponent } from './accueil-admin.component';

describe('AccueilAdminComponent', () => {
  let component: AccueilAdminComponent;
  let fixture: ComponentFixture<AccueilAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiProjetSyntheseService],
      declarations: [AccueilAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
