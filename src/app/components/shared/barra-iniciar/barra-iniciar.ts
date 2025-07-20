import { Component } from '@angular/core';
import { ModalSkill } from '../../../services/modal-skill';
import { ModalSobre } from '../../../services/modal-sobre';
import { ModalProject } from '../../../services/modal-project';
import { ModalIniciar } from '../../../services/modal-iniciar';

@Component({
  selector: 'app-barra-iniciar',
  imports: [],
  templateUrl: './barra-iniciar.html',
  styleUrl: './barra-iniciar.css',
})
export class BarraIniciar {
  constructor(
    private modalSkill: ModalSkill,
    private modalSobre: ModalSobre,
    private modalProjects: ModalProject,
    private modalIniciar: ModalIniciar
  ) {}

  abrirSkills() {
    if (this.modalSobre.getValue()) {
      this.modalSobre.toggle();
    }
    if (this.modalProjects.getValue()) {
      this.modalProjects.toggle();
    }
    this.modalSkill.toggle();
    this.modalIniciar.toogle();
  }

  abrirSobre() {
    if (this.modalSkill.getValue()) {
      this.modalSkill.toggle();
    }
    if (this.modalProjects.getValue()) {
      this.modalProjects.toggle();
    }
    this.modalSobre.toggle();
    this.modalIniciar.toogle();
  }

  abrirProjects() {
    if (this.modalSobre.getValue()) {
      this.modalSobre.toggle();
    }
    if (this.modalSkill.getValue()) {
      this.modalSkill.toggle();
    }
    this.modalProjects.toggle();
    this.modalIniciar.toogle();
  }
}
