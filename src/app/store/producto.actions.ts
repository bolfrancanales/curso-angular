import { createAction, props } from '@ngrx/store';

export const agregarProducto = createAction(
  '[Productos] Agregar',
  props<{ nombre: string; descripcion: string }>()
);

export const borrarProducto = createAction(
  '[Productos] Borrar',
  props<{ id: number }>()
);

export const votoPositivo = createAction(
  '[Productos] Voto Positivo',
  props<{ id: number }>()
);

export const votoNegativo = createAction(
  '[Productos] Voto Negativo',
  props<{ id: number }>()
);