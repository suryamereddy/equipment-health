import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentHealthQueueComponent } from './equipment-health-queue.component';

describe('EquipmentHealthQueueComponent', () => {
  let component: EquipmentHealthQueueComponent;
  let fixture: ComponentFixture<EquipmentHealthQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentHealthQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentHealthQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
