import { Component } from '@angular/core';
import { TradeCardComponent } from '../trade-card/trade-card.component';
import { Trade } from '../models/Trade';
import { Weapon } from '../models/Weapon';

@Component({
  selector: 'app-trades',
  imports: [TradeCardComponent],
  templateUrl: './trades.component.html',
  styleUrl: './trades.component.css',
})
export class TradesComponent {
  title = 'Trades';
  test: Weapon[] = [
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
      rarity: '#4b69ff',
      souvenir: false,
      stattrak: false,
      img: 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_tec9_cu_tec9_asiimov_light_png.png',
    },
  ];
  trades: Trade[] = [
    {
      id: '1',
      weapons: {
        offered: [this.test[1], this.test[1], this.test[1]],
        received: [this.test[0]],
      },
      creationDate: new Date(),
    },
  ];
}
