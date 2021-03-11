import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreStageMoyenneComponent } from './offre-stage-moyenne.component';

describe('OffreStageMoyenneComponent', () => {
  let component: OffreStageMoyenneComponent;
  let fixture: ComponentFixture<OffreStageMoyenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreStageMoyenneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreStageMoyenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
