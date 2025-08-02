import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../../../services/email';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  @ViewChild('formElement') formElement!: ElementRef<HTMLFormElement>;

  constructor(private emailService: EmailService) {}

  sendMail() {
    const form = this.formElement?.nativeElement;
    if (!form) return;
    if (!this.validarCampos(form)) return;

    this.emailService
      .sendEmail(form)
      .then(() => {
        alert('E-mail enviado com sucesso');
        form.reset();
      })
      .catch((err) => {
        console.error('Erro ao enviar', err);
        alert('Erro ao enviar. Tente novamente mais tarde!');
      });
  }
  validarCampos(form: HTMLElement): boolean {
    const name = (
      form.querySelector('[name="name"]') as HTMLInputElement
    ).value.trim();
    const email = (
      form.querySelector('[name="email"]') as HTMLInputElement
    ).value.trim();
    const title = (
      form.querySelector('[name="title"]') as HTMLInputElement
    ).value.trim();
    const mensagem = (
      form.querySelector('[name="mensagem"]') as HTMLTextAreaElement
    ).value.trim();

    if (!name || !email || !title || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  }
  fecharModal() {}
  minimizarModal() {}
}
