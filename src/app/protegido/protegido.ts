import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from '../config/app-config';
import { Mensaje } from '../services/mensaje';
import { MENSAJE_EXISTENTE } from '../config/mensaje-token';

@Component({
  selector: 'app-protegido',
  imports: [],
  templateUrl: './protegido.html',
  styleUrl: './protegido.css',
})
export class Protegido {

  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    public mensaje: Mensaje,
    @Inject(MENSAJE_EXISTENTE) public mensajeExistente: Mensaje
  ) {}

}