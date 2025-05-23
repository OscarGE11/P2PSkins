import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LateralMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  get isPageNotFound(): boolean {
    return this.router.url === '/404';
  }
}
