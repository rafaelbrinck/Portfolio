import { Component, EventEmitter, Output } from '@angular/core';
import { SkillCard } from '../../../shared/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  @Output() fechar = new EventEmitter<void>();
  @Output() minim = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }
  minimizarModal() {
    this.minim.emit();
  }
}
