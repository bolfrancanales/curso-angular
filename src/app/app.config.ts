
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { productoReducer } from './store/producto.reducer';
import { APP_CONFIG, CONFIGURACION } from './config/app-config';
import { Mensaje, MensajePersonalizado } from './services/mensaje';
import { MENSAJE_EXISTENTE } from './config/mensaje-token';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
  provideBrowserGlobalErrorListeners(),
  provideRouter(routes),
  provideHttpClient(),

  provideStore({
    productos: productoReducer
  }),

  {
  provide: APP_CONFIG,
  useValue: CONFIGURACION
},
{
  provide: Mensaje,
  useClass: MensajePersonalizado
},
{
  provide: MENSAJE_EXISTENTE,
  useExisting: Mensaje
}
 
]

};
