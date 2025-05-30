import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { type Weapon } from '../models/Weapon';

@Component({
  selector: 'app-weapon',
  imports: [CommonModule],
  templateUrl: './weapon.component.html',
  styleUrl: './weapon.component.css',
})
export class WeaponComponent implements OnInit {
  ngOnInit(): void {}
  @Input() weapon: Weapon = {
    name: '',
    img: '',
    souvenir: false,
    stattrak: false,
  };
  @Input({ required: true }) offered!: boolean;

  test: Weapon[] = [
    {
      name: 'Desert Eagle | Urban DDPAT',
      rarity: 'Industrial Grade',
      img: 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light_png.png',
      souvenir: true,
      stattrak: false,
    },
  ];
}
