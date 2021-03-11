import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouvezStageComponent } from './trouvez-stage.component';

describe('TrouvezStageComponent', () => {
  let component: TrouvezStageComponent;
  let fixture: ComponentFixture<TrouvezStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouvezStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouvezStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
