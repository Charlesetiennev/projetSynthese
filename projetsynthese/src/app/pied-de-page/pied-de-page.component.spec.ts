import { not } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedDePageComponent } from './pied-de-page.component';

describe('PiedDePageComponent', () => {
  let component: PiedDePageComponent;
  let fixture: ComponentFixture<PiedDePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PiedDePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedDePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('H3 doit avoir la classe font-weight-bold', async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3')).toHaveClass('font-weight-bold');
  });

  it('H3 ne dois pas avoir la classe font-weight-light', async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3')).not.toHaveClass('font-weight-light');
  });
});
