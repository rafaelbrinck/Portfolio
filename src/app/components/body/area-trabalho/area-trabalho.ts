import { Component, Inject, OnInit } from '@angular/core';
import { Skills } from '../pages/skills/skills';
import { CommonModule } from '@angular/common';
import { ModalSkill } from '../../../services/modal-skill';
import { Info } from '../pages/info/info';
import { ModalSobre } from '../../../services/modal-sobre';

@Component({
  selector: 'app-area-trabalho',
  imports: [Skills, CommonModule, Info],
  templateUrl: './area-trabalho.html',
  styleUrl: './area-trabalho.css',
})
export class AreaTrabalho implements OnInit {
  mostrarSkills: boolean = false;
  minimSkills: boolean = false;

  mostrarSobre: boolean = false;

  constructor(
    @Inject(ModalSkill) private modalSkill: ModalSkill,
    private modalSobre: ModalSobre
  ) {}
  ngOnInit() {
    this.modalSkill.mostrarSkills$.subscribe(
      (value) => (this.mostrarSkills = value)
    );
    this.modalSobre.mostrarSobre$.subscribe(
      (value) => (this.mostrarSobre = value)
    );
  }

  abrirSkills() {
    this.modalSkill.toggle();
  }

  abrirSobre() {
    this.modalSobre.toggle();
  }
}
