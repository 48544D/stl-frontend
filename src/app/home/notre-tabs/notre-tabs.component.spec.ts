import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreTabsComponent } from './notre-tabs.component';

describe('NotreTabsComponent', () => {
  let component: NotreTabsComponent;
  let fixture: ComponentFixture<NotreTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotreTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotreTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
