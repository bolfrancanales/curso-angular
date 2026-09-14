import { createReducer, on } from '@ngrx/store';
import { registrarTracking } from './tracking.actions';

export interface TrackingState {
  [tag: string]: number;
}

export const estadoInicialTracking: TrackingState = {};

export const trackingReducer = createReducer(
  estadoInicialTracking,

  on(registrarTracking, (estado, { tag }) => ({
    ...estado,
    [tag]: (estado[tag] ?? 0) + 1
  }))
);