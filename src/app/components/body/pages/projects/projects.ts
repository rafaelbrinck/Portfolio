import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ProjectsInfo } from '../../../shared/projects-info/projects-info';
import { ProjectSimulation } from '../../../shared/project-simulation/project-simulation';
import { animate } from 'motion';
import { Subscription } from 'rxjs';
import { ModalProject } from '../../../../services/modal-project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectsInfo, ProjectSimulation],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit, OnDestroy {
  @Output() fechar = new EventEmitter<void>();
  @Output() minim = new EventEmitter<void>();

  url: string = 'projetos.com.br/';

  simulation: boolean = false;
  simulationHistorico: boolean = false;

  @ViewChild('modalContainer', { static: false }) modalContainer!: ElementRef;

  private fecharSub!: Subscription;

  constructor(private service: ModalProject) {}
  ngOnInit(): void {
    this.fecharSub = this.service.fecharAnimado$.subscribe(() => {
      this.fecharModal(); // chama a animação
    });
  }
  ngAfterViewInit() {
    if (this.modalContainer?.nativeElement) {
      this.modalContainer.nativeElement.style.opacity = '0';
      this.modalContainer.nativeElement.style.transform = 'scale(0.1)';
      animate(
        this.modalContainer.nativeElement,
        { opacity: [0, 1], scale: [0.1, 1] },
        { duration: 0.3, ease: 'easeOut' }
      );
    }
  }

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
    if (this.modalContainer?.nativeElement) {
      animate(
        this.modalContainer.nativeElement,
        { opacity: 0, scale: 0.8 },
        { duration: 0.3, ease: 'easeInOut' }
      ).finished.then(() => {
        this.fechar.emit(); // Só emite quando a animação termina
      });
    } else {
      this.fechar.emit(); // fallback
    }
  }
  minimizarModal() {
    this.minim.emit();
  }
  ngOnDestroy(): void {
    this.fecharSub?.unsubscribe();
  }
}
