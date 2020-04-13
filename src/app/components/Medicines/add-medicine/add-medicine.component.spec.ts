import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineComponent } from './add-medicine.component';

describe('AddMedicineComponent', () => {
  let component: AddMedicineComponent;
  let fixture: ComponentFixture<AddMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
