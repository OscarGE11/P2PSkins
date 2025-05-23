import { Component } from '@angular/core';
import { TradeCardComponent } from '../trade-card/trade-card.component';
import { Trade } from '../models/Trade';
import { Weapon } from '../models/Weapon';
import { SkinsService } from '../services/skins.service';
import { mapToWeapon } from '../utils/mapToWeapon';
import { AddTradeModalComponent } from '../add-trade-modal/add-trade-modal.component';

@Component({
  selector: 'app-trades',
  imports: [TradeCardComponent, AddTradeModalComponent],
  templateUrl: './trades.component.html',
  styleUrl: './trades.component.css',
})
export class TradesComponent {
  title = 'Trades';
  data: any[] = [];
  weapons: Weapon[] = [];
  trades: Trade[] = [];

  addingTrade: boolean = false;

  constructor(private skinService: SkinsService) {}
  ngOnInit(): void {
    this.skinService.getAllSkins().subscribe((data) => {
      this.data = data;
      this.data = [...this.data].filter((s) => s.weapon.name === 'AK-47');

      this.data.map((d) => {
        this.weapons.push(mapToWeapon(d));
      });

      this.populateTrades();
    });
  }

  populateTrades() {
    const savedTrades = localStorage.getItem('trades');

    if (savedTrades) {
      const parsedTrades = JSON.parse(savedTrades);

      this.trades = parsedTrades.map((trade: any) => {
        console.log(trade);
        return {
          ...trade,
          weapons: {
            offered: trade.weapons.offered.map((w: any) =>
              this.weapons.find((weapon) => weapon.id === w.id)
            ),
            received: trade.weapons.received.map((w: any) =>
              this.weapons.find((weapon) => weapon.id === w.id)
            ),
          },
          creationDate: new Date(trade.creationDate),
        };
      });
    } else {
      this.trades = [];
    }
  }

  openAddModal() {
    this.addingTrade = true;
  }
  onCloseModal() {
    this.addingTrade = false;
  }

  newTrade(event: any) {
    const auxTrade: Trade = {
      id: Math.floor(Math.random() * 100).toString(),
      creationDate: new Date(),
      weapons: {
        offered: event.offered,
        received: event.desired,
      },
    };
    this.trades.push(auxTrade);
    localStorage.setItem('trades', JSON.stringify(this.trades));
  }

  onDeleteTrade(event: any) {
    this.trades = this.trades.filter((t) => t.id !== event);
    localStorage.setItem('trades', JSON.stringify(this.trades));
  }
}
