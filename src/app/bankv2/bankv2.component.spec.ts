import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bankv2Component } from './bankv2.component';

describe('Bankv2Component', () => {
  let component: Bankv2Component;
  let fixture: ComponentFixture<Bankv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bankv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bankv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
