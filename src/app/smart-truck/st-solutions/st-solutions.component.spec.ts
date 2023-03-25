import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StSolutionsComponent } from './st-solutions.component';

describe('StSolutionsComponent', () => {
  let component: StSolutionsComponent;
  let fixture: ComponentFixture<StSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
