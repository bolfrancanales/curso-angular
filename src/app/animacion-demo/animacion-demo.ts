import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-animacion-demo',
  imports: [],
  templateUrl: './animacion-demo.html',
  styleUrl: './animacion-demo.css',
  animations: [
    trigger('cambiarEstado', [
      state('normal', style({
        transform: 'scale(1)',
        opacity: 1
      })),

      state('destacado', style({
        transform: 'scale(1.1)',
        opacity: 0.7
      })),

      transition('normal <=> destacado', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class AnimacionDemo {

  estado = 'normal';

  cambiar(): void {
    this.estado =
      this.estado === 'normal'
        ? 'destacado'
        : 'normal';
  }
}
