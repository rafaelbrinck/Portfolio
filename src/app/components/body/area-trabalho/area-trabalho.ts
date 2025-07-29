import { Component, OnInit, viewChild, ViewChild } from '@angular/core';
import { Skills } from '../pages/skills/skills';
import { CommonModule } from '@angular/common';
import { ModalSkill } from '../../../services/modal-skill';
import { Info } from '../pages/info/info';
import { ModalSobre } from '../../../services/modal-sobre';
import { IconsSegPlano } from '../../../services/icons-seg-plano';
import { Projects } from '../pages/projects/projects';
import { ModalProject } from '../../../services/modal-project';
import { BarraIniciar } from '../../shared/barra-iniciar/barra-iniciar';
import { ModalIniciar } from '../../../services/modal-iniciar';
import { Aviso } from '../../shared/aviso/aviso';
import { Contact } from '../pages/contact/contact';

@Component({
  selector: 'app-area-trabalho',
  imports: [Skills, CommonModule, Info, Projects, BarraIniciar, Aviso, Contact],
  templateUrl: './area-trabalho.html',
  styleUrl: './area-trabalho.css',
})
export class AreaTrabalho implements OnInit {
  mostrarSkills: boolean = false;
  mostrarSobre: boolean = false;
  mostrarIcons: boolean = false;
  mostrarProjects: boolean = false;
  mostrarIniciar: boolean = false;

  aviso: boolean = true;
  valid: boolean = false;

  @ViewChild(Info)
  infoComponent!: Info;

  @ViewChild(Projects)
  projectComponent!: Projects;

  @ViewChild(Skills)
  skillComponent!: Skills;

  constructor(
    public modalSkill: ModalSkill,
    public modalSobre: ModalSobre,
    private modalIcons: IconsSegPlano,
    public modalProjects: ModalProject,
    private modalIniciar: ModalIniciar
  ) {}
  ngOnInit() {
    this.modalSkill.mostrarSkills$.subscribe(
      (value) => (this.mostrarSkills = value)
    );
    this.modalSobre.mostrarSobre$.subscribe(
      (value) => (this.mostrarSobre = value)
    );
    this.modalIcons.mostrarIcons$.subscribe((value) => {
      this.mostrarIcons = value;
    });
    this.modalProjects.mostrarProjects$.subscribe((value) => {
      this.mostrarProjects = value;
    });
    this.modalIniciar.mostrarIniciar$.subscribe((value) => {
      this.mostrarIniciar = value;
    });
  }

  abrirSkills() {
    if (this.mostrarSkills && !this.valid) {
      this.skillComponent.fecharModal();
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

  abrirSobre() {
    if (this.mostrarSobre && !this.valid) {
      this.infoComponent.fecharModal();
      this.valid = true;
      return;
    }
    this.valid = false;
    if (this.mostrarSkills) {
      this.modalSkill.toggle();
    }
    if (this.mostrarProjects) {
      this.modalProjects.toggle();
    }
    this.modalSobre.toggle();
  }

  abrirProjects() {
    if (this.mostrarProjects && !this.valid) {
      this.projectComponent.fecharModal();
      this.valid = true;
      return;
    }
    this.valid = false;
    if (this.mostrarSobre) {
      this.modalSobre.toggle();
    }
    if (this.mostrarSkills) {
      this.modalSkill.toggle();
    }
    this.modalProjects.toggle();
  }

  abrirIcons() {
    this.modalIcons.toogle();
  }

  minimizarSobre() {
    this.modalSobre.minimizar();
  }
  minimizarSkill() {
    this.modalSkill.minimizar();
  }
  minimizarProjects() {
    this.modalProjects.minimizar();
  }

  fecharAviso() {
    this.aviso = false;
  }
}
