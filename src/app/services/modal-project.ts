import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalProject {
  private _mostrarProjects = new BehaviorSubject<boolean>(false);
  mostrarProjects$ = this._mostrarProjects.asObservable();

  private _minProjects = new BehaviorSubject<boolean>(false);
  minProjects = this._minProjects.asObservable();

  toggle() {
    if (this._minProjects.getValue()) {
      this._minProjects.next(false);
    }
    this._mostrarProjects.next(!this._mostrarProjects.getValue());
  }
  fechar() {
    this._mostrarProjects.next(false);
    this._minProjects.next(false);
  }

  minimizar() {
    this._minProjects.next(true);
    this._mostrarProjects.next(false);
  }

  getValue(): boolean {
    return this._mostrarProjects.getValue();
  }
}
