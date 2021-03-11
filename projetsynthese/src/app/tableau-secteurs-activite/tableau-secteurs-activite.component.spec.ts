import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauSecteursActiviteComponent } from './tableau-secteurs-activite.component';

describe('TableauSecteursActiviteComponent', () => {
  let component: TableauSecteursActiviteComponent;
  let fixture: ComponentFixture<TableauSecteursActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauSecteursActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauSecteursActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
