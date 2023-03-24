import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsChoisirComponent } from './solutions-choisir.component';

describe('SolutionsChoisirComponent', () => {
  let component: SolutionsChoisirComponent;
  let fixture: ComponentFixture<SolutionsChoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsChoisirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsChoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
