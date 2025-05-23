import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeaponComponent } from '../weapon/weapon.component';
import { Trade } from '../models/Trade';
import { Weapon } from '../models/Weapon';
import { LateralMenuComponent } from '../lateral-menu/lateral-menu.component';
import { OffersContainerComponent } from '../offers-container/offers-container.component';
import { AddTradeModalComponent } from '../add-trade-modal/add-trade-modal.component';
import { SkinsService } from '../services/skins.service';
import { Observable } from 'rxjs';
import { mapToWeapon } from '../utils/mapToWeapon';

@Component({
  selector: 'app-trade-card',
  imports: [CommonModule, WeaponComponent, OffersContainerComponent],
  templateUrl: './trade-card.component.html',
  styleUrl: './trade-card.component.css',
})
export class TradeCardComponent implements OnInit {
  ngOnInit() {}
  @Input({ required: true }) trade!: Trade;
  @Output() deleteTrade = new EventEmitter();
  offered: boolean = true;

  onDeleteTrade() {
    this.deleteTrade.emit(this.trade.id);
  }
}
