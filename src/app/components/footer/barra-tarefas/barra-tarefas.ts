import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ModalSkill } from '../../../services/modal-skill';
import { CommonModule } from '@angular/common';
import { ModalSobre } from '../../../services/modal-sobre';
import { Relogio } from '../relogio/relogio';
import { IconsSegPlano } from '../../../services/icons-seg-plano';
import { ModalProject } from '../../../services/modal-project';
import { ModalIniciar } from '../../../services/modal-iniciar';
import { Info } from '../../body/pages/info/info';
import { Projects } from '../../body/pages/projects/projects';
import { Skills } from '../../body/pages/skills/skills';

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
  minSobre: boolean = false;

  mostrarProjects: boolean = false;
  minProjects: boolean = false;

  mostrarIcon: boolean = false;
  mostrarIniciar: boolean = false;

  valid: boolean = false;

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
    this.modalSkill.minSkills$.subscribe((value) => {
      this.minSkills = value;
    });
    this.modalSobre.mostrarSobre$.subscribe((value) => {
      this.mostrarSobre = value;
    });
    this.modalSobre.minSobre$.subscribe((value) => {
      this.minSobre = value;
    });
    this.modalIcon.mostrarIcons$.subscribe((value) => {
      this.mostrarIcon = value;
    });
    this.modalProjects.mostrarProjects$.subscribe((value) => {
      this.mostrarProjects = value;
    });
    this.modalProjects.minProjects.subscribe((value) => {
      this.minProjects = value;
    });
    this.modalIniciar.mostrarIniciar$.subscribe((value) => {
      this.mostrarIniciar = value;
    });
  }

  abrirSobre() {
    if (this.mostrarSobre && !this.valid) {
      this.modalSobre.fecharAnimado();
      this.valid = true;
      return;
    }
    this.valid = false;
    if (this.mostrarSkils) {
      this.modalSkill.toggle();
    }
    if (this.mostrarProjects) {
      this.modalProjects.toggle();
    }
    this.modalSobre.toggle();
  }

  abrirSkill() {
    if (this.mostrarSkils && !this.valid) {
      this.modalSkill.fecharAnimado();
      this.valid = true;
      return;
    }
    this.valid = false;
    if (this.mostrarSobre) {
      this.modalSobre.toggle();
    }
    if (this.mostrarProjects) {
      this.modalProjects.toggle();
    }
    this.modalSkill.toggle();
  }
  abrirProjects() {
    if (this.mostrarProjects && !this.valid) {
      this.modalProjects.fecharAnimado();
      this.valid = true;
      return;
    }
    this.valid = false;
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
