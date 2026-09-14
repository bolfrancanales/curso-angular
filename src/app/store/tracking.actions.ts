import { createAction, props } from '@ngrx/store';

export const registrarTracking = createAction(
  '[Tracking] Registrar Click',
  props<{ tag: string }>()
);