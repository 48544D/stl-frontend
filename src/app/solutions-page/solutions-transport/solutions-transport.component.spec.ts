import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsTransportComponent } from './solutions-transport.component';

describe('SolutionsTransportComponent', () => {
  let component: SolutionsTransportComponent;
  let fixture: ComponentFixture<SolutionsTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsTransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
