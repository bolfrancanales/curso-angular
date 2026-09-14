import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';

import { Producto } from '../store/producto.reducer';

@Injectable({
  providedIn: 'root'
})
export class AppDatabase extends Dexie {

  productos!: Table<Producto, number>;

  constructor() {
    super('CursoAngularDB');

    this.version(1).stores({
      productos: 'id,nombre'
    });
  }
}