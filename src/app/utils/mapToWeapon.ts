import { Weapon } from '../models/Weapon';

export function mapToWeapon(item: any): Weapon {
  return {
    name: item.name,
    img: item.image,
    souvenir: item.souvenir,
    stattrak: item.stattrak,
    wear: item.wears[0].name,
    rarity: item.rarity.color,
    id: item.id,
  };
}
