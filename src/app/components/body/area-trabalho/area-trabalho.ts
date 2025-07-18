import { Component, Inject, OnInit } from '@angular/core';
import { Skills } from '../skills/skills';
import { CommonModule } from '@angular/common';
import { ModalSkill } from '../../../service/modal-skill';

@Component({
  selector: 'app-area-trabalho',
  imports: [Skills, CommonModule],
  templateUrl: './area-trabalho.html',
  styleUrl: './area-trabalho.css',
})
export class AreaTrabalho implements OnInit {
  mostrarSkills: boolean = false;
  minimSkills: boolean = false;

  constructor(@Inject(ModalSkill) private modalSkill: ModalSkill) {}
  ngOnInit() {
    this.modalSkill.mostrarSkills$.subscribe(
      (value) => (this.mostrarSkills = value)
    );
  }

  abrirSkills() {
    if (this.mostrarSkills == false) {
      this.modalSkill.abrir();
    } else {
      this.modalSkill.fechar();
    }
  }
  fecharSkills() {
    this.mostrarSkills = false;
  }
}
