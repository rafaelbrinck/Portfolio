import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SkillCard } from '../../../shared/skill-card/skill-card';
import { animate } from 'motion';
import { Subscription } from 'rxjs';
import { ModalSkill } from '../../../../services/modal-skill';

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit, OnDestroy {
  @Output() fechar = new EventEmitter<void>();
  @Output() minim = new EventEmitter<void>();
  @ViewChild('modalContainer', { static: false }) modalContainer!: ElementRef;

  private fecharSub!: Subscription;

  constructor(private service: ModalSkill) {}
  ngOnInit(): void {
    this.fecharSub = this.service.fecharAnimado$.subscribe(() => {
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
