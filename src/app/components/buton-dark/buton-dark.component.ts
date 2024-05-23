import { Component, inject } from '@angular/core';
import { NightModeService } from '../../services/night-mode.service';

@Component({
  selector: 'app-buton-dark',
  standalone: true,
  imports: [],
  templateUrl: './buton-dark.component.html',
  styleUrl: './buton-dark.component.css'
})
export class ButonDarkComponent {
//Injectamos el servicio night-mode
  private nightModeService = inject(NightModeService);
  //Definimos una propiedad tipo, inicializada a Nocturno
  tipo: string = 'Dark';
  color: string = "black";
  texto: string = "white";
  borderStyle: string = '2px solid white';
 

  //Este método se llamará cuando se haga click en el botón
  toggleNightMode() {
    this.nightModeService.toggleNightMode();
    this.tipo = this.nightModeService.isNightMode() ? 'Light' : 'Dark';
    this.color = this.nightModeService.isNightMode() ? 'white' : 'black';
    this.texto = this.nightModeService.isNightMode() ? 'black' : 'white';
    this.borderStyle = this.nightModeService.isNightMode() ? '2px solid black' : '2px solid white';

  }
}
