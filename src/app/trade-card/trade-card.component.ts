import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WeaponComponent } from '../weapon/weapon.component';

@Component({
  selector: 'app-trade-card',
  imports: [CommonModule, WeaponComponent],
  templateUrl: './trade-card.component.html',
  styleUrl: './trade-card.component.css',
})
export class TradeCardComponent {}
