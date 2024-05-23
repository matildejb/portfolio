import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NightModeService {

  //Este servicio gestiona el estado del modo nocturno en nuestra app

  //Creamos una variable boolean, el estado inicial nocturno es false
  nightMode: boolean = false;

  //Con este método cambiaremos el estado
  toggleNightMode() {
    this.nightMode = !this.nightMode;
  }

  //Devuelveme el estado actual
  isNightMode() {
    return this.nightMode;
  }
}
