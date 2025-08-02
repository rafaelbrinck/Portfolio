import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalContato {
  private _mostrarContato = new BehaviorSubject<boolean>(false);
  mostrarContato$ = this._mostrarContato.asObservable();

  private _minContato = new BehaviorSubject<boolean>(false);
  minContato$ = this._minContato.asObservable();

  private _fecharAnimado = new Subject<void>();
  fecharAnimado$ = this._fecharAnimado.asObservable();

  toggle() {
    if (this._minContato.getValue()) {
      this._minContato.next(false);
    }
    this._mostrarContato.next(!this._mostrarContato.getValue());
  }
  fechar() {
    this._mostrarContato.next(false);
    this._minContato.next(false);
  }
  abrir() {
    this._mostrarContato.next(true);
  }
  fecharAnimado() {
    this._fecharAnimado.next();
  }
  minimizar() {
    this._minContato.next(true);
    this._mostrarContato.next(false);
  }
  getValue(): boolean {
    return this._mostrarContato.getValue();
  }
}
