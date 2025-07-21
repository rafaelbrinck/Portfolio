import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { animate } from 'motion';
import { ModalSobre } from '../../../../services/modal-sobre';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info implements OnInit, OnDestroy {
  @Output() fechar = new EventEmitter<void>();
  @Output() minim = new EventEmitter<void>();

  @ViewChild('modalContainer', { static: false }) modalContainer!: ElementRef;

  private fecharSub!: Subscription;

  constructor(private modalSobre: ModalSobre) {}

  ngOnInit(): void {
    this.fecharSub = this.modalSobre.fecharAnimado$.subscribe(() => {
      this.fecharModal(); // chama a animação
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

  fecharModal() {
    if (this.modalContainer?.nativeElement) {
      animate(
        this.modalContainer.nativeElement,
        { opacity: 0, scale: 0.8 },
        { duration: 0.3, ease: 'easeInOut' }
      ).finished.then(() => {
        this.fechar.emit(); // Só emite quando a animação termina
      });
    } else {
      this.fechar.emit(); // fallback
    }
  }

  minimizarModal() {
    if (this.modalContainer) {
      animate(
        this.modalContainer.nativeElement,
        { transform: 'scale(0.1)', opacity: 0 },
        {
          duration: 0.5,
          ease: 'easeInOut',
        }
      ).finished.then(() => {
        this.minim.emit(); // dispara evento para esconder na área de trabalho
      });
    } else {
      this.minim.emit();
    }
  }
  ngOnDestroy(): void {
    this.fecharSub?.unsubscribe();
  }
}
