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
  it('Verifie que les 5 liens de la navigation sont present ', async () => {
    expect(fixture.debugElement.queryAll(By.css('a')).length).toBe(5);
  });

  it("Verifie qu'il n'y a pas plus de cinq liens", async () => {
    expect(
      fixture.debugElement.queryAll(By.css('a')).length
    ).not.toBeGreaterThan(5);
  });
});
