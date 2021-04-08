import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemandeStageCompletComponent } from './demande-stage-complet.component';

describe('DemandeStageCompletComponent', () => {
  let component: DemandeStageCompletComponent;
  let fixture: ComponentFixture<DemandeStageCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [DemandeStageCompletComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeStageCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
