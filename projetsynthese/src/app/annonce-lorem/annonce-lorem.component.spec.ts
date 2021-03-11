import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceLoremComponent } from './annonce-lorem.component';

describe('AnnonceLoremComponent', () => {
  let component: AnnonceLoremComponent;
  let fixture: ComponentFixture<AnnonceLoremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceLoremComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceLoremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
