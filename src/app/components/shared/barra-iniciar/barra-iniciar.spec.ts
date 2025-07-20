import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraIniciar } from './barra-iniciar';

describe('BarraIniciar', () => {
  let component: BarraIniciar;
  let fixture: ComponentFixture<BarraIniciar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraIniciar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraIniciar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
