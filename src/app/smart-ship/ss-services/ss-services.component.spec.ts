import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsServicesComponent } from './ss-services.component';

describe('SsServicesComponent', () => {
  let component: SsServicesComponent;
  let fixture: ComponentFixture<SsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
