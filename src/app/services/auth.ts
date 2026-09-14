import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private logueado = false;

  login(): void {
    this.logueado = true;
  }

  logout(): void {
    this.logueado = false;
  }

  estaLogueado(): boolean {
    return this.logueado;
  }
}