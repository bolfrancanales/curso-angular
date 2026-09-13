import { Component, signal } from '@angular/core';
import { Listado } from './listado/listado';

@Component({
  selector: 'app-root',
  imports: [Listado],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('curso-angular');
}
