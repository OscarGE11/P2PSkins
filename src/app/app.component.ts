import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LateralMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CSGOSkins';
}
