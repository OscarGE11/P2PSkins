import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offers-container',
  imports: [CommonModule],
  templateUrl: './offers-container.component.html',
  styleUrl: './offers-container.component.css',
})
export class OffersContainerComponent {
  @Input() color!: string;
  @Input() title!: string;
}
