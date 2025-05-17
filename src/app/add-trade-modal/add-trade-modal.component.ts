import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-trade-modal',
  imports: [],
  templateUrl: './add-trade-modal.component.html',
  styleUrl: './add-trade-modal.component.css',
})
export class AddTradeModalComponent {
  @Output() closeModal = new EventEmitter();

  onCloseModal() {
    this.closeModal.emit();
  }
}
