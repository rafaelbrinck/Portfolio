import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalProject {
  private _mostrarProjects = new BehaviorSubject<boolean>(false);
  mostrarProjects$ = this._mostrarProjects.asObservable();

  toggle() {
    this._mostrarProjects.next(!this._mostrarProjects.getValue());
  }
  fechar() {
    this._mostrarProjects.next(false);
  }
}
