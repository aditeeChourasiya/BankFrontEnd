import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bankv1Component } from './bankv1.component';

describe('Bankv1Component', () => {
  let component: Bankv1Component;
  let fixture: ComponentFixture<Bankv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bankv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bankv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
