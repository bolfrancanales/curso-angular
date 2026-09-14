import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { APP_CONFIG, AppConfig } from '../config/app-config';
import { Producto } from '../store/producto.reducer';
import { agregarProductoApi } from '../store/producto.actions';
import { AppDatabase } from './app-database';

@Injectable({
  providedIn: 'root'
})
export class ProductoApi {

  constructor(
    private http: HttpClient,
    private store: Store,
    private db: AppDatabase,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      `${this.config.apiUrl}/productos`
    );
  }

  agregarProducto(
    nombre: string,
    descripcion: string
  ): Observable<Producto> {

    return this.http.post<Producto>(
      `${this.config.apiUrl}/productos`,
      {
        nombre: nombre,
        descripcion: descripcion
      }
    ).pipe(
      tap(async producto => {

        await this.db.productos.add(producto);

        this.store.dispatch(
          agregarProductoApi({
            id: producto.id,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            votos: producto.votos
          })
        );

      })
    );
  }
}