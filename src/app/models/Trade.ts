import { Weapon } from './Weapon';

export class Trade {
  id!: string;
  /* offeredWeapon!: Weapon;
  receivedWeapon!: Weapon; */
  creationDate!: Date;
  weapons!: {
    received: Weapon[];
    offered: Weapon[];
  };
}
