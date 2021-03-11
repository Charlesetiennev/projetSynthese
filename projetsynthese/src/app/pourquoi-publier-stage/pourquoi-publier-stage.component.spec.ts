import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoiPublierStageComponent } from './pourquoi-publier-stage.component';

describe('PourquoiPublierStageComponent', () => {
  let component: PourquoiPublierStageComponent;
  let fixture: ComponentFixture<PourquoiPublierStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PourquoiPublierStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PourquoiPublierStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
