import { Routes } from '@angular/router';
import { Listado } from './listado/listado';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full'
  },
  {
    path: 'listado',
    component: Listado
  }
];