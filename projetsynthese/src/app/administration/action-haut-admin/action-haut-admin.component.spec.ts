import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionHautAdminComponent } from './action-haut-admin.component';

describe('ActionHautAdminComponent', () => {
  let component: ActionHautAdminComponent;
  let fixture: ComponentFixture<ActionHautAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionHautAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionHautAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
