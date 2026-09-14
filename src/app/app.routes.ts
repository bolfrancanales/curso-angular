import { Routes } from '@angular/router';

import { Listado } from './listado/listado';
import { Login } from './login/login';
import { Protegido } from './protegido/protegido';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full'
  },
  {
    path: 'listado',
    component: Listado
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'protegido',
    component: Protegido,
    canActivate: [authGuard]
  }
];