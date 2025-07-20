import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalSobre {
  private _mostrarSobre = new BehaviorSubject<boolean>(false);
  mostrarSobre$ = this._mostrarSobre.asObservable();

  abrir() {
    this._mostrarSobre.next(true);
  }

  fechar() {
    this._mostrarSobre.next(false);
  }

  toggle() {
    this._mostrarSobre.next(!this._mostrarSobre.getValue());
  }

  getValue(): boolean {
    return this._mostrarSobre.getValue();
  }
}
