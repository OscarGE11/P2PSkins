import { Component } from '@angular/core';
import { TradeCardComponent } from '../trade-card/trade-card.component';

@Component({
  selector: 'app-trades',
  imports: [TradeCardComponent],
  templateUrl: './trades.component.html',
  styleUrl: './trades.component.css',
})
export class TradesComponent {
  title = 'Trades';
}
