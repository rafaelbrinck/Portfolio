import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aviso',
  imports: [],
  templateUrl: './aviso.html',
  styleUrl: './aviso.css',
})
export class Aviso {
  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }
}
