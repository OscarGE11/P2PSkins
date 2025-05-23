import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { mapToWeapon } from '../utils/mapToWeapon';
import { Weapon } from '../models/Weapon';
import { SkinsService } from '../services/skins.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-trade-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-trade-modal.component.html',
  styleUrl: './add-trade-modal.component.css',
})
export class AddTradeModalComponent implements OnInit {
  data: any[] = [];
  weapons: Weapon[] = [];
  desiredWeapon!: Weapon;
  offeredWeapon!: Weapon;
  isLoading: boolean = true;
  constructor(private skinService: SkinsService) {}
  ngOnInit(): void {
    this.skinService.getAllSkins().subscribe((data) => {
      this.data = data;
      this.data = [...this.data].filter((s) => s.weapon.name === 'AK-47');

      this.data.map((d) => {
        this.weapons.push(mapToWeapon(d));
        this.isLoading = false;
      });
    });
  }

  @Output() closeModal = new EventEmitter();
  @Output() sendWeapons = new EventEmitter<{
    desired: Weapon[];
    offered: Weapon[];
  }>();

  onCloseModal() {
    this.closeModal.emit();
  }
  onSubmit() {
    this.sendWeapons.emit({
      desired: [this.desiredWeapon],
      offered: [this.offeredWeapon],
    });
    this.onCloseModal();
  }

  get isTradeInvalid(): boolean {
    return (
      !this.offeredWeapon ||
      !this.desiredWeapon ||
      this.offeredWeapon === this.desiredWeapon
    );
  }
}
