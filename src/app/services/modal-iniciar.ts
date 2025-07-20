import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalIniciar {
  private _mostrarIniciar = new BehaviorSubject<boolean>(false);
  mostrarIniciar$ = this._mostrarIniciar.asObservable();

  toogle() {
    this._mostrarIniciar.next(!this._mostrarIniciar.getValue());
  }

  fechar() {
    this._mostrarIniciar.next(false);
  }
}
