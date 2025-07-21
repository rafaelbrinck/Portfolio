import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalSkill {
  private _mostrarSkills = new BehaviorSubject<boolean>(false);
  mostrarSkills$ = this._mostrarSkills.asObservable();

  private _minSkills = new BehaviorSubject<boolean>(false);
  minSkills$ = this._minSkills.asObservable();

  private _fecharAnimado = new Subject<void>();
  fecharAnimado$ = this._fecharAnimado.asObservable();

  fechar() {
    this._mostrarSkills.next(false);
    this._minSkills.next(false);
  }
  abrir() {
    this._mostrarSkills.next(true);
  }

  fecharAnimado() {
    this._fecharAnimado.next();
  }

  minimizar() {
    this._minSkills.next(true);
    this._mostrarSkills.next(false);
  }

  toggle() {
    if (this._minSkills.getValue()) {
      this._minSkills.next(false);
    }
    this._mostrarSkills.next(!this._mostrarSkills.getValue());
  }

  getValue(): boolean {
    return this._mostrarSkills.getValue();
  }
}
