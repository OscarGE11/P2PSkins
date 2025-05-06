import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weapon',
  imports: [CommonModule],
  templateUrl: './weapon.component.html',
  styleUrl: './weapon.component.css',
})
export class WeaponComponent {
  @Input({ required: true }) tradeDirection!: string;
  test = [
    {
      id: 'skin-65604',
      name: 'Desert Eagle | Urban DDPAT',
      description:
        "As expensive as it is powerful, the Desert Eagle is an iconic pistol that is difficult to master but surprisingly accurate at long range. It has been painted using a Digital Disruptive Pattern (DDPAT) hydrographic.\\n\\n<i>By the time you're close enough to notice the pixels it's already too late</i>",
      weapon: {
        id: 'weapon_deagle',
        weapon_id: 1,
        name: 'Desert Eagle',
      },
      category: {
        id: 'csgo_inventory_weapon_category_pistols',
        name: 'Pistols',
      },
      pattern: {
        id: 'hy_ddpat_urb',
        name: 'Urban DDPAT',
      },
      min_float: 0.06,
      max_float: 0.8,
      rarity: {
        id: 'rarity_uncommon_weapon',
        name: 'Industrial Grade',
        color: '#5e98d9',
      },
      stattrak: false,
      souvenir: true,
      paint_index: '17',
      wears: [
        {
          id: 'SFUI_InvTooltip_Wear_Amount_0',
          name: 'Factory New',
        },
        // ...
      ],
      collections: [
        {
          id: 'collection-set-overpass',
          name: 'The Overpass Collection',
          image:
            'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/set_icons/set_overpass_png.png',
        },
      ],
      crates: [
        {
          id: 'crate-4028',
          name: 'ESL One Cologne 2014 Overpass Souvenir Package',
          image:
            'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_esl14_promo_de_overpass_png.png',
        },
        // ...
      ],
      team: {
        id: 'both',
        name: 'Both Teams',
      },
      legacy_model: true,
      image:
        'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light_png.png',
    },
    // ...
  ];
}
