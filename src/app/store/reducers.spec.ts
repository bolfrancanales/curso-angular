import { describe, it, expect } from 'vitest';


import {
  productoReducer,
  estadoInicial
} from './producto.reducer';

import {
  agregarProducto,
  borrarProducto,
  votoPositivo,
  votoNegativo,
  agregarProductoApi
} from './producto.actions';

import {
  trackingReducer,
  estadoInicialTracking
} from './tracking.reducer';

import {
  registrarTracking
} from './tracking.actions';


describe('Producto Reducer', () => {

  it('debe retornar el estado inicial', () => {
    const estado = productoReducer(undefined, { type: 'DESCONOCIDA' });

    expect(estado).toEqual(estadoInicial);
  });


  it('debe agregar un producto', () => {
    const estadoAnterior = [...estadoInicial];

    const nuevoEstado = productoReducer(
      estadoAnterior,
      agregarProducto({
        nombre: 'Monitor',
        descripcion: 'Monitor de prueba'
      })
    );

    expect(nuevoEstado.length).toBe(estadoAnterior.length + 1);
    expect(nuevoEstado).not.toBe(estadoAnterior);
  });


  it('debe borrar un producto', () => {
    const estadoAnterior = [...estadoInicial];

    const nuevoEstado = productoReducer(
      estadoAnterior,
      borrarProducto({ id: 1 })
    );

    expect(nuevoEstado.length).toBe(estadoAnterior.length - 1);
    expect(nuevoEstado).not.toBe(estadoAnterior);
  });


  it('debe registrar un voto positivo', () => {
    const estadoAnterior = [...estadoInicial];

    const nuevoEstado = productoReducer(
      estadoAnterior,
      votoPositivo({ id: 1 })
    );

    expect(nuevoEstado[0].votos).toBe(
      estadoAnterior[0].votos + 1
    );

    expect(nuevoEstado).not.toBe(estadoAnterior);
  });


  it('debe registrar un voto negativo', () => {
    const estadoAnterior = [...estadoInicial];

    const nuevoEstado = productoReducer(
      estadoAnterior,
      votoNegativo({ id: 1 })
    );

    expect(nuevoEstado[0].votos).toBe(
      estadoAnterior[0].votos - 1
    );

    expect(nuevoEstado).not.toBe(estadoAnterior);
  });


  it('debe agregar un producto recibido desde la API', () => {
    const estadoAnterior = [...estadoInicial];

    const nuevoEstado = productoReducer(
      estadoAnterior,
      agregarProductoApi({
        id: 100,
        nombre: 'Impresora',
        descripcion: 'Impresora de prueba',
        votos: 0
      })
    );

    expect(nuevoEstado.length).toBe(estadoAnterior.length + 1);
    expect(nuevoEstado).not.toBe(estadoAnterior);
  });

});


describe('Tracking Reducer', () => {

  it('debe retornar el estado inicial', () => {
    const estado = trackingReducer(
      undefined,
      { type: 'DESCONOCIDA' }
    );

    expect(estado).toEqual(estadoInicialTracking);
  });


  it('debe registrar un tracking tag', () => {
    const estadoAnterior = { ...estadoInicialTracking };

    const nuevoEstado = trackingReducer(
      estadoAnterior,
      registrarTracking({
        tag: 'voto-positivo'
      })
    );

    expect(nuevoEstado['voto-positivo']).toBe(1);
    expect(nuevoEstado).not.toBe(estadoAnterior);
  });


  it('debe incrementar un tracking tag existente', () => {
    const estadoAnterior = {
      'voto-positivo': 1
    };

    const nuevoEstado = trackingReducer(
      estadoAnterior,
      registrarTracking({
        tag: 'voto-positivo'
      })
    );

    expect(nuevoEstado['voto-positivo']).toBe(2);

    expect(
      estadoAnterior['voto-positivo']
    ).toBe(1);

    expect(nuevoEstado).not.toBe(estadoAnterior);
  });

});