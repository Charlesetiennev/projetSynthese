import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouvezUnStageComponent } from './trouvez-un-stage.component';

describe('TrouvezUnStageComponent', () => {
  let component: TrouvezUnStageComponent;
  let fixture: ComponentFixture<TrouvezUnStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouvezUnStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouvezUnStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
