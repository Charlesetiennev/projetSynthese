import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCandidatsAdminComponent } from './liste-candidats-admin.component';

describe('ListeCandidatsAdminComponent', () => {
  let component: ListeCandidatsAdminComponent;
  let fixture: ComponentFixture<ListeCandidatsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCandidatsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCandidatsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
