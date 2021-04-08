import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PourquoiPublierStageComponent } from './pourquoi-publier-stage.component';

describe('PourquoiPublierStageComponent', () => {
  let component: PourquoiPublierStageComponent;
  let fixture: ComponentFixture<PourquoiPublierStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PourquoiPublierStageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PourquoiPublierStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Doit contenir le bon nombre de li dans la liste', () => {
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  });
  it("S'assure qu'il n'y a pas moins de 3 li dans la liste", () => {
    expect(fixture.debugElement.queryAll(By.css('li')).length).not.toBeLessThan(
      3
    );
  });
});
