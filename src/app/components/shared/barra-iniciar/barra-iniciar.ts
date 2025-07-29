import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ModalSkill } from '../../../services/modal-skill';
import { ModalSobre } from '../../../services/modal-sobre';
import { ModalProject } from '../../../services/modal-project';
import { ModalIniciar } from '../../../services/modal-iniciar';
import { animate } from 'motion';
import { MenuPipe } from '../../../pipes/menu-pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-iniciar',
  imports: [MenuPipe, CommonModule, FormsModule],
  templateUrl: './barra-iniciar.html',
  styleUrl: './barra-iniciar.css',
})
export class BarraIniciar {
  @ViewChild('modalContainer', { static: false }) modalContainer!: ElementRef;

  menuAgrupado = {
    C: [
      {
        nome: 'Contato',
        icon: 'assets/icons/email.svg',
        acao: () => this.abrirContato(),
      },
    ],
    H: [
      {
        nome: 'Habilidades',
        icon: 'assets/icons/skills.png',
        acao: () => this.abrirSkills(),
      },
    ],
    P: [
      {
        nome: 'Projetos',
        icon: 'assets/icons/chrome.svg',
        acao: () => this.abrirProjects(),
      },
    ],
    S: [
      {
        nome: 'Sobre',
        icon: 'assets/icons/projects.png',
        acao: () => this.abrirSobre(),
      },
    ],
  };

  buscaMenu: string = '';

  constructor(
    private renderer: Renderer2,
    private modalSkill: ModalSkill,
    private modalSobre: ModalSobre,
    private modalProjects: ModalProject,
    private modalIniciar: ModalIniciar
  ) {}

  ngAfterViewInit() {
    if (this.modalContainer?.nativeElement) {
      const element = this.modalContainer.nativeElement;
      this.renderer.setStyle(element, 'overflow', 'hidden');
      this.renderer.setStyle(element, 'height', '0');
      this.renderer.setStyle(element, 'opacity', '0');

      const fullHeight = '300px';

      animate(
        element,
        {
          height: [0, fullHeight],
          opacity: [0, 1],
        },
        {
          duration: 0.4,
          ease: 'easeOut',
        }
      ).finished.then(() => {
        // Remove o overflow/height fixo após a animação
        this.renderer.setStyle(element, 'height', '300px');
        this.renderer.removeStyle(element, 'overflow');
      });
    }
  }

  abrirContato() {}
  abrirSkills() {
    if (this.modalSobre.getValue()) {
      this.modalSobre.toggle();
    }
    if (this.modalProjects.getValue()) {
      this.modalProjects.toggle();
    }
    this.modalSkill.abrir();
    this.modalIniciar.toogle();
  }

  abrirSobre() {
    if (this.modalSkill.getValue()) {
      this.modalSkill.toggle();
    }
    if (this.modalProjects.getValue()) {
      this.modalProjects.toggle();
    }
    this.modalSobre.abrir();
    this.modalIniciar.toogle();
  }

  abrirProjects() {
    if (this.modalSobre.getValue()) {
      this.modalSobre.toggle();
    }
    if (this.modalSkill.getValue()) {
      this.modalSkill.toggle();
    }
    this.modalProjects.abrir();
    this.modalIniciar.toogle();
  }
}
