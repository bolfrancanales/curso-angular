import { InjectionToken } from '@angular/core';
import { Mensaje } from '../services/mensaje';

export const MENSAJE_EXISTENTE =
  new InjectionToken<Mensaje>('MENSAJE_EXISTENTE');