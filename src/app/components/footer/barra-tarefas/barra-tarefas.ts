import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalSkill } from '../../../services/modal-skill';
import { CommonModule } from '@angular/common';
import { ModalSobre } from '../../../services/modal-sobre';
import { Relogio } from '../relogio/relogio';
import { IconsSegPlano } from '../../../services/icons-seg-plano';
import { ModalProject } from '../../../services/modal-project';
import { ModalIniciar } from '../../../services/modal-iniciar';

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
  mostrarProjects: boolean = false;
  mostrarIcon: boolean = false;
  mostrarIniciar: boolean = false;

  constructor(
    private modalSkill: ModalSkill,
    private modalSobre: ModalSobre,
    private modalIcon: IconsSegPlano,
    private modalProjects: ModalProject,
    private modalIniciar: ModalIniciar
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
    this.modalProjects.mostrarProjects$.subscribe((value) => {
      this.mostrarProjects = value;
    });
    this.modalIniciar.mostrarIniciar$.subscribe((value) => {
      this.mostrarIniciar = value;
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
  abrirProjects() {
    if (this.mostrarSobre) {
      this.modalSobre.toggle();
    }
    if (this.mostrarSkils) {
      this.modalSkill.toggle();
    }
    this.modalProjects.toggle();
  }

  fecharTudo() {
    this.modalSkill.fechar();
    this.modalSobre.fechar();
    this.modalProjects.fechar();
    this.modalIniciar.fechar();
  }

  toogleIniciar() {
    this.modalIniciar.toogle();
  }

  toogleIcons() {
    this.modalIcon.toogle();
  }
}
