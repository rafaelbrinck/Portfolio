import { Component, Inject, OnInit } from '@angular/core';
import { Skills } from '../pages/skills/skills';
import { CommonModule } from '@angular/common';
import { ModalSkill } from '../../../services/modal-skill';
import { Info } from '../pages/info/info';
import { ModalSobre } from '../../../services/modal-sobre';
import { IconsSegPlano } from '../../../services/icons-seg-plano';
import { Projects } from '../pages/projects/projects';
import { ModalProject } from '../../../services/modal-project';

@Component({
  selector: 'app-area-trabalho',
  imports: [Skills, CommonModule, Info, Projects],
  templateUrl: './area-trabalho.html',
  styleUrl: './area-trabalho.css',
})
export class AreaTrabalho implements OnInit {
  mostrarSkills: boolean = false;
  minimSkills: boolean = false;

  mostrarSobre: boolean = false;
  mostrarIcons: boolean = false;
  mostrarProjects: boolean = false;

  constructor(
    @Inject(ModalSkill) private modalSkill: ModalSkill,
    private modalSobre: ModalSobre,
    private modalIcons: IconsSegPlano,
    private modalProjects: ModalProject
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
  }

  abrirSkills() {
    if (this.mostrarSobre) {
      this.modalSobre.toggle();
    }
    if (this.mostrarProjects) {
      this.modalProjects.toggle();
    }
    this.modalSkill.toggle();
  }

  abrirSobre() {
    if (this.mostrarSkills) {
      this.modalSkill.toggle();
    }
    if (this.mostrarProjects) {
      this.modalProjects.toggle();
    }
    this.modalSobre.toggle();
  }

  abrirProjects() {
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
}
