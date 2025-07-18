import { Component } from '@angular/core';
import { ModalSkill } from '../../../service/modal-skill';

@Component({
  selector: 'app-barra-tarefas',
  imports: [],
  templateUrl: './barra-tarefas.html',
  styleUrl: './barra-tarefas.css',
})
export class BarraTarefas {
  constructor(private modalSkill: ModalSkill) {}

  abrirSkill() {
    this.modalSkill.toggle();
  }
}
