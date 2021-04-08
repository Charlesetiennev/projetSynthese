import { not } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OffreStageMoyenneComponent } from './offre-stage-moyenne.component';

describe('OffreStageMoyenneComponent', () => {
  let component: OffreStageMoyenneComponent;
  let fixture: ComponentFixture<OffreStageMoyenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffreStageMoyenneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreStageMoyenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Description doit contenir moins de 78 caracteres ', () => {
    const description = fixture.debugElement.query(By.css('.description'))
      .nativeElement;
    expect(description.innerHTML.length).toBeLessThanOrEqual(78);
  });
  it('Description ne dois pas etre vide', () => {
    const description = fixture.debugElement.query(By.css('.description'))
      .nativeElement;
    expect(description.innerHTML).not.toBeNull();
  });
});
