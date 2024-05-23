import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButonDarkComponent } from '../buton-dark/buton-dark.component';
import { NightModeService } from '../../services/night-mode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ButonDarkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
private nightModeService = inject(NightModeService);

  toggleNightMode() {
    this.nightModeService.toggleNightMode();
  }
}
