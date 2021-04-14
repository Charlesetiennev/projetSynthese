// navigation.spec.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Vérifiez que les 5 liens de la navigation sont présents. ', async () => {
    expect(fixture.debugElement.queryAll(By.css('a')).length).toBe(5);
  });

  it("Vérifiez qu'il n'y a pas plus de 5 liens.", async () => {
    expect(
      fixture.debugElement.queryAll(By.css('a')).length
    ).not.toBeGreaterThan(5);
  });
});
