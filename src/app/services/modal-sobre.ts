import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalSobre {
  private _mostrarSobre = new BehaviorSubject<boolean>(false);
  mostrarSobre$ = this._mostrarSobre.asObservable();

  private _minSobre = new BehaviorSubject<boolean>(false);
  minSobre$ = this._minSobre.asObservable();

  abrir() {
    this._mostrarSobre.next(true);
  }

  fechar() {
    this._mostrarSobre.next(false);
    this._minSobre.next(false);
  }

  toggle() {
    if (this._minSobre.getValue()) {
      this._minSobre.next(false);
    }
    this._mostrarSobre.next(!this._mostrarSobre.getValue());
  }

  minimizar() {
    this._minSobre.next(true);
    this._mostrarSobre.next(false);
  }

  getValue(): boolean {
    return this._mostrarSobre.getValue();
  }
}
