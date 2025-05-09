import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WeaponComponent } from '../weapon/weapon.component';
import { Trade } from '../models/Trade';
import { Weapon } from '../models/Weapon';

@Component({
  selector: 'app-trade-card',
  imports: [CommonModule, WeaponComponent],
  templateUrl: './trade-card.component.html',
  styleUrl: './trade-card.component.css',
})
export class TradeCardComponent {
  @Input({ required: true }) trade!: Trade;
  offered: boolean = true;

  /* test: Weapon[] = [
    {
      name: 'Desert Eagle | Urban DDPAT',
      rarity: 'Industrial Grade',
      img: 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light_png.png',
      souvenir: true,
      stattrak: false,
    },
    {
      id: 'skin-1967292',
      name: 'Tec-9 | Isaac',
      rarity: 'Mil-Spec Grade',
      souvenir: false,
      stattrak: false,
      img: 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_tec9_cu_tec9_asiimov_light_png.png',
    },
  ]; */
}
