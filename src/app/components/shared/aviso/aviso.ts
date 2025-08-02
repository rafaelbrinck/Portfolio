import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { animate } from 'motion';

@Component({
  selector: 'app-aviso',
  imports: [],
  templateUrl: './aviso.html',
  styleUrl: './aviso.css',
})
export class Aviso {
  @Output() fechar = new EventEmitter<void>();
  @ViewChild('modalContainer', { static: false }) modalContainer!: ElementRef;

  gAfterViewInit() {
    if (this.modalContainer?.nativeElement) {
      this.modalContainer.nativeElement.style.opacity = '0';
      this.modalContainer.nativeElement.style.transform = 'scale(0.1)';
      animate(
        this.modalContainer.nativeElement,
        { opacity: [0, 1], scale: [0.1, 1] },
        { duration: 0.4, ease: 'easeOut' }
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
        this.fechar.emit();
      });
    } else {
      this.fechar.emit();
    }
  }
}
