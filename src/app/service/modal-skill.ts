import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalSkill {
  private _mostrarSkills = new BehaviorSubject<boolean>(false);
  mostrarSkills$ = this._mostrarSkills.asObservable();

  abrir() {
    this._mostrarSkills.next(true);
  }

  fechar() {
    this._mostrarSkills.next(false);
  }
  toggle() {
    this._mostrarSkills.next(!this._mostrarSkills.getValue());
  }
}
