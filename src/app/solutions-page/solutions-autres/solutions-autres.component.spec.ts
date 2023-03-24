import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsAutresComponent } from './solutions-autres.component';

describe('SolutionsAutresComponent', () => {
  let component: SolutionsAutresComponent;
  let fixture: ComponentFixture<SolutionsAutresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsAutresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
