import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-projects-info',
  imports: [],
  templateUrl: './projects-info.html',
  styleUrl: './projects-info.css',
})
export class ProjectsInfo {
  @Output() ativar = new EventEmitter<void>();

  ativarSimulation() {
    this.ativar.emit();
  }
}
