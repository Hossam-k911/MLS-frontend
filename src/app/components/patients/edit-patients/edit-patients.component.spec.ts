import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientsComponent } from './edit-patients.component';

describe('EditPatientsComponent', () => {
  let component: EditPatientsComponent;
  let fixture: ComponentFixture<EditPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
