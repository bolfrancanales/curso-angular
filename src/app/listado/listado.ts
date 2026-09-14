import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Item } from '../item/item';
import { FormularioProducto } from '../formulario-producto/formulario-producto';
import { Producto } from '../store/producto.reducer';
import { ProductoApi } from '../services/producto-api';
import { Mapa } from '../mapa/mapa';
import { AnimacionDemo } from '../animacion-demo/animacion-demo';
import { TrackingClick } from '../directives/tracking-click';
import { TrackingState } from '../store/tracking.reducer';

import {
  agregarProducto,
  borrarProducto,
  votoPositivo,
  votoNegativo
} from '../store/producto.actions';

@Component({
  selector: 'app-listado',
  imports: [CommonModule, Item, FormularioProducto, Mapa, AnimacionDemo, TrackingClick],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {

  productos$: Observable<Producto[]>;
  tracking$: Observable<TrackingState>;

  constructor(
  private store: Store<{ productos: Producto[]; tracking: TrackingState }>,
  private productoApi: ProductoApi
) {
  this.productos$ = this.store.select('productos');
  this.tracking$ = this.store.select('tracking');
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