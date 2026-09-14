import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Protegido } from './protegido';

describe('Protegido', () => {
  let component: Protegido;
  let fixture: ComponentFixture<Protegido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Protegido],
    }).compileComponents();

    fixture = TestBed.createComponent(Protegido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
