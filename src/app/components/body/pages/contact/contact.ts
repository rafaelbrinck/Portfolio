import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../../../services/email';
import { Subscription } from 'rxjs';
import { ModalContato } from '../../../../services/modal-contato';
import { animate } from 'motion';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit, OnDestroy {
  @Output() fechar = new EventEmitter<void>();
  @Output() minim = new EventEmitter<void>();

  @ViewChild('formElement') formElement!: ElementRef<HTMLFormElement>;

  @ViewChild('modalContainer', { static: false }) modalContainer!: ElementRef;

  private fecharSub!: Subscription;

  constructor(
    private emailService: EmailService,
    private service: ModalContato
  ) {}

  ngOnInit(): void {
    this.fecharSub = this.service.fecharAnimado$.subscribe(() => {
      this.fecharModal();
    });
  }
  ngAfterViewInit() {
    if (this.modalContainer?.nativeElement) {
      this.modalContainer.nativeElement.style.opacity = '0';
      this.modalContainer.nativeElement.style.transform = 'scale(0.1)';
      animate(
        this.modalContainer.nativeElement,
        { opacity: [0, 1], scale: [0.1, 1] },
        { duration: 0.3, ease: 'easeOut' }
      );
    }
  }

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
  fecharModal() {
    if (this.modalContainer?.nativeElement) {
      animate(
        this.modalContainer.nativeElement,
        { opacity: 0, scale: 0.8 },
        { duration: 0.3, ease: 'easeInOut' }
      ).finished.then(() => {
        this.fechar.emit();
      });
    } else {
      this.fechar.emit();
    }
  }
  minimizarModal() {
    this.minim.emit();
  }

  ngOnDestroy(): void {
    this.fecharSub?.unsubscribe();
  }
}
