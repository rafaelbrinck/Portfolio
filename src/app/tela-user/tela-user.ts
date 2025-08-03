import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { ModalIniciar } from '../services/modal-iniciar';

@Component({
  selector: 'app-tela-user',
  imports: [CommonModule],
  templateUrl: './tela-user.html',
  styleUrl: './tela-user.css',
})
export class TelaUser {
  logando: boolean = false;
  data: string = '';
  horaAtual: string = '';
  intervalo: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private modalIniciar: ModalIniciar
  ) {}

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
    this.data = agora.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  toggleLogando() {
    this.logando = !this.logando;
    console.log(this.logando);
  }

  entrar() {
    this.auth.logar();
    this.modalIniciar.fechar();
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo); // evita vazamento de memória
  }
}
