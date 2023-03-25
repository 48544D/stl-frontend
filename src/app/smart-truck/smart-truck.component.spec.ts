import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTruckComponent } from './smart-truck.component';

describe('SmartTruckComponent', () => {
  let component: SmartTruckComponent;
  let fixture: ComponentFixture<SmartTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTruckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
