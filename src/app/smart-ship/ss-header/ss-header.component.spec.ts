import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsHeaderComponent } from './ss-header.component';

describe('SsHeaderComponent', () => {
  let component: SsHeaderComponent;
  let fixture: ComponentFixture<SsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
