import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTarefas } from './barra-tarefas';

describe('BarraTarefas', () => {
  let component: BarraTarefas;
  let fixture: ComponentFixture<BarraTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraTarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraTarefas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
