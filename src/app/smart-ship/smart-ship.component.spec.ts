import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartShipComponent } from './smart-ship.component';

describe('SmartShipComponent', () => {
  let component: SmartShipComponent;
  let fixture: ComponentFixture<SmartShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
