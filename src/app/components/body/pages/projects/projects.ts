import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectsInfo } from '../../../shared/projects-info/projects-info';
import { ProjectSimulation } from '../../../shared/project-simulation/project-simulation';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectsInfo, ProjectSimulation],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  @Output() fechar = new EventEmitter<void>();
  @Output() minim = new EventEmitter<void>();

  url: string = 'projetos.com.br/';

  simulation: boolean = false;
  simulationHistorico: boolean = false;

  ativarSimulation() {
    this.simulation = true;
    this.simulationHistorico = true;
    this.url = 'controle-financeiro-angular.vercel.app/';
  }
  fecharSimulation() {
    if (this.simulationHistorico) {
      this.simulation = false;
      this.url = 'projetos.com.br/';
    }
  }
  reload() {
    this.simulation = false;
    this.url = 'projetos.com.br/';
    this.simulationHistorico = false;
  }

  fecharModal() {
    this.fechar.emit();
  }
  minimizarModal() {
    this.minim.emit();
  }
}
