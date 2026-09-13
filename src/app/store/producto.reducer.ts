import { createReducer, on } from '@ngrx/store';
import {
  agregarProducto,
  borrarProducto,
  votoPositivo,
  votoNegativo
} from './producto.actions';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  votos: number;
}

export const estadoInicial: Producto[] = [
  {
    id: 1,
    nombre: 'Laptop',
    descripcion: 'Computadora para trabajo y estudio',
    votos: 0
  },
  {
    id: 2,
    nombre: 'Mouse',
    descripcion: 'Dispositivo para controlar el cursor',
    votos: 0
  },
  {
    id: 3,
    nombre: 'Teclado',
    descripcion: 'Dispositivo para ingresar texto',
    votos: 0
  }
];

export const productoReducer = createReducer(
  estadoInicial,

  on(agregarProducto, (estado, { nombre, descripcion }) => [
    ...estado,
    {
      id: Date.now(),
      nombre,
      descripcion,
      votos: 0
    }
  ]),

  on(borrarProducto, (estado, { id }) =>
    estado.filter(producto => producto.id !== id)
  ),

  on(votoPositivo, (estado, { id }) =>
    estado.map(producto =>
      producto.id === id
        ? { ...producto, votos: producto.votos + 1 }
        : producto
    )
  ),

  on(votoNegativo, (estado, { id }) =>
    estado.map(producto =>
      producto.id === id
        ? { ...producto, votos: producto.votos - 1 }
        : producto
    )
  )
);