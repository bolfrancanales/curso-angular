import { Component } from '@angular/core';
import { Item } from '../item/item';

@Component({
  selector: 'app-listado',
  imports: [Item],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
  elementos = [
    { nombre: 'Laptop', descripcion: 'Computadora para trabajo y estudio' },
    { nombre: 'Mouse', descripcion: 'Dispositivo para controlar el cursor' },
    { nombre: 'Teclado', descripcion: 'Dispositivo para ingresar texto' }
  ];

  agregar(nombre: string, descripcion: string): void {
    this.elementos.push({
      nombre: nombre,
      descripcion: descripcion
    });
  }
}