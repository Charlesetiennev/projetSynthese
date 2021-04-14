// accueil.spec.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccueilComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("Récupération du H1 pour vérifier que son contenu n'a pas de faute.", async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Facile à utiliser!'
    );
  });
  it("Récupération du H1 pour vérifier que son contenu n'a pas de faute.", async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).not.toContain(
      'Facile a utiliser!'
    );
  });
});
