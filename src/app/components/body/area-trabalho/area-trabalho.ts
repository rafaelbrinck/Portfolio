import { Component, OnInit, ViewChild } from '@angular/core';
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
import { Contact } from '../pages/contact/contact';
import { ModalContato } from '../../../services/modal-contato';

@Component({
  selector: 'app-area-trabalho',
  imports: [Skills, CommonModule, Info, Projects, BarraIniciar, Contact],
  templateUrl: './area-trabalho.html',
  styleUrl: './area-trabalho.css',
})
export class AreaTrabalho implements OnInit {
  mostrarSkills: boolean = false;
  mostrarSobre: boolean = false;
  mostrarIcons: boolean = false;
  mostrarProjects: boolean = false;
  mostrarIniciar: boolean = false;
  mostrarContato: boolean = false;

  aviso: boolean = true;
  valid: boolean = false;

  @ViewChild(Info)
  infoComponent!: Info;

  @ViewChild(Projects)
  projectComponent!: Projects;

  @ViewChild(Skills)
  skillComponent!: Skills;

  @ViewChild(Contact)
  contactComponent!: Contact;

  constructor(
    public modalSkill: ModalSkill,
    public modalSobre: ModalSobre,
    private modalIcons: IconsSegPlano,
    public modalProjects: ModalProject,
    private modalIniciar: ModalIniciar,
    public modalContato: ModalContato
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
    this.modalContato.mostrarContato$.subscribe((value) => {
      this.mostrarContato = value;
    });
  }

  abrirSkills() {
    if (!this.mostrarSkills) {
      if (this.mostrarSkills && !this.valid) {
        this.skillComponent.fecharModal();
        this.valid = true;
        return;
      }
      this.valid = false;
      if (this.mostrarSobre) {
        this.minimizarSobre();
      }
      if (this.mostrarProjects) {
        this.minimizarProjects();
      }
      if (this.mostrarContato) {
        this.minimizarContato();
      }
      this.modalSkill.toggle();
    }
  }

  abrirContato() {
    if (!this.mostrarContato) {
      if (this.mostrarContato && !this.valid) {
        this.contactComponent.minimizarModal();
        this.valid = true;
        return;
      }
      this.valid = false;
      if (this.mostrarSkills) {
        this.minimizarSkill();
      }
      if (this.mostrarSobre) {
        this.minimizarSobre();
      }
      if (this.mostrarProjects) {
        this.minimizarProjects();
      }
      this.modalContato.toggle();
    }
  }

  abrirSobre() {
    if (!this.mostrarSobre) {
      if (this.mostrarSobre && !this.valid) {
        this.infoComponent.minimizarModal();
        this.valid = true;
        return;
      }
      this.valid = false;
      if (this.mostrarSkills) {
        this.minimizarSkill();
      }
      if (this.mostrarProjects) {
        this.minimizarProjects();
      }
      if (this.mostrarContato) {
        this.minimizarContato();
      }
      this.modalSobre.toggle();
    }
  }

  abrirProjects() {
    if (!this.mostrarProjects) {
      if (this.mostrarProjects && !this.valid) {
        this.modalProjects.toggle();
        this.valid = true;
        return;
      }
      this.valid = false;
      if (this.mostrarSobre) {
        this.minimizarSobre();
      }
      if (this.mostrarSkills) {
        this.minimizarSkill();
      }
      if (this.mostrarContato) {
        this.minimizarContato();
      }
      this.modalProjects.toggle();
    }
  }

  fecharIniciar() {
    if (this.mostrarIniciar) {
      this.modalIniciar.fechar();
    }
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
  minimizarContato() {
    this.modalContato.minimizar();
  }

  fecharAviso() {
    this.aviso = false;
  }
}
