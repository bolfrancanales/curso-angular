import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaBootstrap } from './prueba-bootstrap/prueba-bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PruebaBootstrap],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('curso-angular');
}
