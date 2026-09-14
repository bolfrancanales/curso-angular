import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Item } from '../item/item';
import { FormularioProducto } from '../formulario-producto/formulario-producto';
import { Producto } from '../store/producto.reducer';
import { ProductoApi } from '../services/producto-api';

import {
  agregarProducto,
  borrarProducto,
  votoPositivo,
  votoNegativo
} from '../store/producto.actions';

@Component({
  selector: 'app-listado',
  imports: [CommonModule, Item, FormularioProducto],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {

  productos$: Observable<Producto[]>;

  constructor(
  private store: Store<{ productos: Producto[] }>,
  private productoApi: ProductoApi
) {
  this.productos$ = this.store.select('productos');
}

  agregarProducto(producto: { nombre: string; descripcion: string }): void {
  this.productoApi
    .agregarProducto(producto.nombre, producto.descripcion)
    .subscribe();
}

  borrar(id: number): void {
    this.store.dispatch(borrarProducto({ id }));
  }

  votarPositivo(id: number): void {
    this.store.dispatch(votoPositivo({ id }));
  }

  votarNegativo(id: number): void {
    this.store.dispatch(votoNegativo({ id }));
  }
}