import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsHeaderComponent } from './solutions-header.component';

describe('SolutionsHeaderComponent', () => {
  let component: SolutionsHeaderComponent;
  let fixture: ComponentFixture<SolutionsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
