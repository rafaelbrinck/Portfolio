import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private key = 'tokenPadrao';
  logar() {
    localStorage.setItem(this.key, this.key);
  }
  logout() {
    localStorage.removeItem(this.key);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.key);
  }
}
