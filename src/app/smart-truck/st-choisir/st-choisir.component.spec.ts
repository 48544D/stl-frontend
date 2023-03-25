import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StChoisirComponent } from './st-choisir.component';

describe('StChoisirComponent', () => {
  let component: StChoisirComponent;
  let fixture: ComponentFixture<StChoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StChoisirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StChoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
