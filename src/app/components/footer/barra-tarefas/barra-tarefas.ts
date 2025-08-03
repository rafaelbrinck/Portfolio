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
import { ModalContato } from '../../../services/modal-contato';
@Component({
  selector: 'app-barra-tarefas',
  imports: [CommonModule, Relogio],
  templateUrl: './barra-tarefas.html',
  styleUrl: './barra-tarefas.css',
})
export class BarraTarefas implements OnInit {
  mostrarSkils: boolean = false;
  minSkills: boolean = false;

  mostrarContato: boolean = false;
  minContato: boolean = false;

  mostrarSobre: boolean = false;
  minSobre: boolean = false;

  mostrarProjects: boolean = false;
  minProjects: boolean = false;

  mostrarIcon: boolean = false;
  mostrarIniciar: boolean = false;

  valid: boolean = false;
  mute: boolean = false;

  constructor(
    private modalSkill: ModalSkill,
    private modalSobre: ModalSobre,
    private modalIcon: IconsSegPlano,
    public modalProjects: ModalProject,
    private modalIniciar: ModalIniciar,
    private modalContato: ModalContato
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
    this.modalContato.mostrarContato$.subscribe((value) => {
      this.mostrarContato = value;
    });
    this.modalContato.minContato$.subscribe((value) => {
      this.minContato = value;
    });
  }

  abrirSobre() {
    if (this.mostrarSobre && !this.valid) {
      this.modalSobre.minimizar();
      this.valid = true;
      return;
    }
    this.valid = false;
    if (this.mostrarSkils) {
      this.modalSkill.minimizar();
    }
    if (this.mostrarProjects) {
      this.modalProjects.minimizar();
    }
    if (this.mostrarContato) {
      this.modalContato.minimizar();
    }
    this.modalSobre.toggle();
  }

  abrirContato() {
    if (this.mostrarContato && !this.valid) {
      this.modalContato.minimizar();
      this.valid = true;
      return;
    }
    this.valid = false;
    if (this.mostrarSkils) {
      this.modalSkill.minimizar();
    }
    if (this.mostrarProjects) {
      this.modalProjects.minimizar();
    }
    if (this.mostrarSobre) {
      this.modalSobre.minimizar();
    }
    this.modalContato.toggle();
  }

  abrirSkill() {
    if (this.mostrarSkils && !this.valid) {
      this.modalSkill.minimizar();
      this.valid = true;
      return;
    }
    this.valid = false;
    if (this.mostrarSobre) {
      this.modalSobre.minimizar();
    }
    if (this.mostrarProjects) {
      this.modalProjects.minimizar();
    }
    if (this.mostrarContato) {
      this.modalContato.minimizar();
    }
    this.modalSkill.toggle();
  }
  abrirProjects() {
    if (this.mostrarProjects && !this.valid) {
      this.modalProjects.minimizar();
      this.valid = true;
      return;
    }
    this.valid = false;
    if (this.mostrarSobre) {
      this.modalSobre.minimizar();
    }
    if (this.mostrarSkils) {
      this.modalSkill.minimizar();
    }
    if (this.mostrarContato) {
      this.modalContato.minimizar();
    }
    this.modalProjects.toggle();
  }

  fecharTudo() {
    this.modalSkill.minimizar();
    this.modalSobre.minimizar();
    this.modalProjects.minimizar();
    this.modalIniciar.fechar();
    this.modalContato.minimizar();
  }

  toogleIniciar() {
    this.modalIniciar.toogle();
  }

  toogleIcons() {
    this.modalIcon.toogle();
  }
}
