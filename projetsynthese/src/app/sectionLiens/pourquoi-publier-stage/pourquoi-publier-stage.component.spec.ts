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
  it('Doit contenir le bon nombre de LI dans la liste.', () => {
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  });
  it("S'assurez qu'il y a un maximum de 3 LI dans la liste.", () => {
    expect(fixture.debugElement.queryAll(By.css('li')).length).not.toBeLessThan(
      3
    );
  });
});
