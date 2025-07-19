import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IconsSegPlano {
  private _mostrarIcons = new BehaviorSubject<boolean>(false);
  mostrarIcons$ = this._mostrarIcons.asObservable();

  toogle() {
    this._mostrarIcons.next(!this._mostrarIcons.value);
  }
}
