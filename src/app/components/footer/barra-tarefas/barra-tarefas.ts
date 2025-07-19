import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalSkill } from '../../../services/modal-skill';
import { CommonModule } from '@angular/common';
import { ModalSobre } from '../../../services/modal-sobre';
import { Relogio } from '../relogio/relogio';
import { IconsSegPlano } from '../../../services/icons-seg-plano';

@Component({
  selector: 'app-barra-tarefas',
  imports: [CommonModule, Relogio],
  templateUrl: './barra-tarefas.html',
  styleUrl: './barra-tarefas.css',
})
export class BarraTarefas implements OnInit {
  mostrarSkils: boolean = false;
  minSkills: boolean = false;

  mostrarSobre: boolean = false;
  mostrarProjeto: boolean = false;
  mostrarIcon: boolean = false;

  constructor(
    private modalSkill: ModalSkill,
    private modalSobre: ModalSobre,
    private modalIcon: IconsSegPlano
  ) {}

  ngOnInit(): void {
    this.modalSkill.mostrarSkills$.subscribe((value) => {
      this.mostrarSkils = value;
    });
    this.modalSobre.mostrarSobre$.subscribe((value) => {
      this.mostrarSobre = value;
    });
    this.modalIcon.mostrarIcons$.subscribe((value) => {
      this.mostrarIcon = value;
    });
  }

  abrirSobre() {
    if (this.mostrarSkils) {
      this.modalSkill.toggle();
    }
    this.modalSobre.toggle();
  }

  abrirSkill() {
    if (this.mostrarSobre) {
      this.modalSobre.toggle();
    }
    this.modalSkill.toggle();
  }

  fecharTudo() {
    this.modalSkill.fechar();
    this.modalSobre.fechar();
  }

  toogleIcons() {
    this.modalIcon.toogle();
  }
}
