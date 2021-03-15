import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteStagiaireMoyenComponent } from './carte-stagiaire-moyen.component';

describe('CarteStagiaireMoyenComponent', () => {
  let component: CarteStagiaireMoyenComponent;
  let fixture: ComponentFixture<CarteStagiaireMoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteStagiaireMoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteStagiaireMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
