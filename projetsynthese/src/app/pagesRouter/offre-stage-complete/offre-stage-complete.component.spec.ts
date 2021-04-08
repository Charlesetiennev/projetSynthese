import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { OffreStageCompleteComponent } from './offre-stage-complete.component';

describe('OffreStageCompleteComponent', () => {
  let component: OffreStageCompleteComponent;
  let fixture: ComponentFixture<OffreStageCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [OffreStageCompleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreStageCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
