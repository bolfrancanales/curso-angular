import { InjectionToken } from '@angular/core';

export interface AppConfig {
  nombreAplicacion: string;
  apiUrl: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const CONFIGURACION: AppConfig = {
  nombreAplicacion: 'Gestión de Productos',
  apiUrl: 'http://localhost:3000'
};