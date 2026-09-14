import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  iniciarSesion(): void {
    this.auth.login();
    this.router.navigate(['/protegido']);
  }
}