import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationAdminComponent } from './navigation-admin.component';

describe('NavigationAdminComponent', () => {
  let component: NavigationAdminComponent;
  let fixture: ComponentFixture<NavigationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavigationAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("Récupération du logo pour vérifiez son contenu n'a pas de faute", async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('eStage');
  });
  it("Récupération du logo pour vérifiez son contenu n'a pas de faute", async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).not.toContain('estage');
  });
});
