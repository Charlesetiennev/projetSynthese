import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreStageDetailComponent } from './offre-stage-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('OffreStageDetailComponent', () => {
  let component: OffreStageDetailComponent;
  let fixture: ComponentFixture<OffreStageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [OffreStageDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreStageDetailComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
