import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consumption-input',
  templateUrl: './consumption-input.component.html',
  styleUrls: ['./consumption-input.component.css'],
})
export class ConsumptionInputComponent {
  consumption!: number | null;
  @Output() consumptionAdded = new EventEmitter<number>();
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() {}

  addConsumption() {
    if (this.consumption) {
      this.consumptionAdded.emit(this.consumption);
      this.consumption = null;
    }
  }

  onClickClose() {
    this.closeModal.emit(true);
  }
}
