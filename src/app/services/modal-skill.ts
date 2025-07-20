import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalSkill {
  private _mostrarSkills = new BehaviorSubject<boolean>(false);
  mostrarSkills$ = this._mostrarSkills.asObservable();

  private _minSkills = new BehaviorSubject<boolean>(false);
  minSkills$ = this._minSkills.asObservable();

  fechar() {
    this._mostrarSkills.next(false);
  }

  minimizar() {
    this._minSkills.next(true);
    this._mostrarSkills.next(false);
  }

  toggle() {
    this._mostrarSkills.next(!this._mostrarSkills.getValue());
  }

  getValue(): boolean {
    return this._mostrarSkills.getValue();
  }
}
