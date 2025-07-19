import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  @Output() fechar = new EventEmitter<void>();
  @Output() minim = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }
  minimizarModal() {
    this.minim.emit();
  }
}
