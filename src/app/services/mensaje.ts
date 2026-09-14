import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mensaje {

  obtenerMensaje(): string {
    return 'Mensaje del servicio original';
  }
}

@Injectable()
export class MensajePersonalizado extends Mensaje {

  override obtenerMensaje(): string {
    return 'Servicio inyectado mediante useClass';
  }
}
