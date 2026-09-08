import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaBootstrap } from './prueba-bootstrap';

describe('PruebaBootstrap', () => {
  let component: PruebaBootstrap;
  let fixture: ComponentFixture<PruebaBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaBootstrap],
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaBootstrap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
