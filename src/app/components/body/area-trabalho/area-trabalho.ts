import { Component } from '@angular/core';
import { Skills } from '../skills/skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area-trabalho',
  imports: [Skills, CommonModule],
  templateUrl: './area-trabalho.html',
  styleUrl: './area-trabalho.css',
})
export class AreaTrabalho {
  mostrarSkills: boolean = false;
  minimSkills: boolean = false;

  abrirSkills() {
    if (this.mostrarSkills == false) {
      this.mostrarSkills = true;
    } else {
      this.mostrarSkills = false;
    }
  }
  fecharSkills() {
    this.mostrarSkills = false;
  }
}
