import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireHealthComponent } from './tire-health.component';

describe('TireHealthComponent', () => {
  let component: TireHealthComponent;
  let fixture: ComponentFixture<TireHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TireHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TireHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
