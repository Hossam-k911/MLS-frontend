import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCategoriesComponent } from './medical-categories.component';

describe('MedicalCategoriesComponent', () => {
  let component: MedicalCategoriesComponent;
  let fixture: ComponentFixture<MedicalCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
