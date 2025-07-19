import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relogio',
  imports: [CommonModule],
  templateUrl: './relogio.html',
  styleUrl: './relogio.css',
})
export class Relogio implements OnInit {
  horaAtual: string = '';
  intervalo: any;

  ngOnInit(): void {
    this.atualizarHora(); // chama logo ao iniciar
    this.intervalo = setInterval(() => {
      this.atualizarHora();
    }, 1000);
  }

  atualizarHora(): void {
    const agora = new Date();
    this.horaAtual = agora.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo); // evita vazamento de memória
  }
}
